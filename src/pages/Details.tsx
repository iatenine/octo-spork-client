import { useState } from "react";
import { Card, Col, Row, Container, Tabs, Tab, Button } from "react-bootstrap";
import {
  PersonCircle,
  XCircleFill,
  CheckCircleFill,
  Telephone,
  Building,
  Globe,
  Alarm,
  Geo,
} from "react-bootstrap-icons";
import { getMemberVotes } from "../utils/utils";
import { url } from "../data/constants";
import { useDetails } from "../hooks/useDetails";

function Details(props: {
  members: any[];
  resetDistrict: Function;
  district: number | "At-Large";
}) {
  const [records, setRecords] = useState<any[]>([]);
  const { getBorder } = useDetails();

  const fetchRecords = async (id: string) => {
    if (records.some(({ member_id }) => id === member_id)) return;
    const res = await getMemberVotes(url, id);
    setRecords([...records, ...res.votingRecords.records]);
  };

  const getLink = (billName: string, congress: number): JSX.Element => {
    const sanitizedName: string = billName.replace(/\W/g, "");
    const billNumber: number = Number(sanitizedName.replace(/^\D+/g, ""));
    if (/^hr/i.test(sanitizedName)) {
      return (
        <a
          href={`https://www.govtrack.us/congress/bills/${congress}/hr${billNumber}`}
          target={"no_blank"}
        >
          {sanitizedName}
        </a>
      );
    }
    if (/^pn/i.test(sanitizedName)) {
      return (
        <a
          href={`https://www.congress.gov/nomination/${congress}th-congress/${billNumber}`}
          target={"no_blank"}
        >
          {sanitizedName}
        </a>
      );
    }

    if (/^pn/i.test(sanitizedName)) {
      return (
        <a
          href={`https://www.congress.gov/bill/${congress}th-congress/senate-bill/${billNumber}`}
          target={"no_blank"}
        >
          {sanitizedName}
        </a>
      );
    }

    return <>{sanitizedName}</>;
  };

  return (
    <div>
      <Row xs={12} sm={4}>
        {props.members.map((member) => {
          return (
            <Container fluid className="mb-2" key={member._id}>
              <Card className={getBorder(member.title)}>
                <Card.Body style={{ backgroundColor: "antiquewhite" }}>
                  <Card.Title>{`${member.first_name} ${member.last_name}`}</Card.Title>
                  <Card.Subtitle>{`${member.title}`}</Card.Subtitle>
                  <Tabs
                    defaultActiveKey={"profile"}
                    onSelect={(k) => {
                      if (k === "vote") fetchRecords(member.id);
                    }}
                  >
                    <Tab
                      eventKey={"profile"}
                      title={"Profile"}
                      style={{ backgroundColor: "white" }}
                    >
                      <Card.Text>
                        <PersonCircle size={"98%"} />
                        <ul
                          style={{
                            listStyle: "none",
                          }}
                        >
                          <li>
                            {" "}
                            <Geo /> State: {member.state}
                            {member.district ? (
                              <span>, District: {member.district}</span>
                            ) : (
                              ""
                            )}
                          </li>
                          <li
                            className={`${
                              new Date().getFullYear() === member.next_election
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            {" "}
                            <Alarm /> Next Election: {member.next_election}
                          </li>
                          <li>
                            <Globe /> <a href={member.url}>{member.url}</a>
                          </li>
                          <li>
                            <Telephone />{" "}
                            <a href={`tel:${member.phone}`}>{member.phone}</a>
                          </li>
                          <li>
                            <Building /> {member.office}
                          </li>
                        </ul>
                      </Card.Text>
                    </Tab>
                    <Tab eventKey={"vote"} title={"Voting Records"}>
                      {records.some((elem) => elem.member_id === member.id) ? (
                        <div>
                          {records
                            .filter((bill) => bill.member_id === member.id)
                            .map(
                              ({
                                position,
                                question,
                                date,
                                description,
                                result,
                                bill,
                                congress,
                              }) => {
                                return (
                                  <>
                                    <Row className="bg-info text-center">
                                      <Col>
                                        {getLink(bill.number, congress)} -{" "}
                                        {question}
                                      </Col>
                                    </Row>
                                    {bill?.title && (
                                      <Row className="bg-info">
                                        <Col xs={3}>Title</Col>
                                        <Col>{bill.title}</Col>
                                      </Row>
                                    )}

                                    <Row className="bg-info">
                                      <Col xs={3}>Description </Col>
                                      <Col>{description} </Col>
                                    </Row>

                                    <Row>
                                      <Col xs={3}>Position</Col>
                                      <Col>
                                        {position === "Yes" && (
                                          <CheckCircleFill color="green" />
                                        )}
                                        {position === "No" && (
                                          <XCircleFill color={"maroon"} />
                                        )}{" "}
                                        {position}
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col xs={3}>Result </Col>
                                      <Col>{result} </Col>
                                    </Row>
                                    <Row>
                                      <Col xs={3}>Date </Col>
                                      <Col>{date} </Col>
                                    </Row>
                                  </>
                                );
                              }
                            )}
                        </div>
                      ) : (
                        "Records loading. Please wait"
                      )}
                    </Tab>
                  </Tabs>
                </Card.Body>
              </Card>
            </Container>
          );
        })}
      </Row>
      <Row>
        <Button variant="secondary" onClick={() => props.resetDistrict()}>
          Back
        </Button>
      </Row>
    </div>
  );
}

export default Details;
