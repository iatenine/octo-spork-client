import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardImage } from "react-bootstrap-icons";

function Details(props: {
  members: any[];
  resetDistrict: Function;
  district: number | "At-Large";
}) {
  console.log({ members: props.members, district: props.district });

  return (
    <div>
      <Row xs={2} md={4} lg={6}>
        {props.members.map((member) => {
          return (
            <Container key={member._id}>
              <Col>
                <h3>{`${member.title} ${member.first_name} ${member.last_name}`}</h3>
                <CardImage size={"100%"} />
                {/* <img src="*" alt="profile image not found" /> */}
              </Col>
              <Col>
                <ul>
                  <li>State: {member.state}</li>
                  {member.district ? <li>District: {member.district}</li> : ""}
                  <li>Next Election: {member.next_election}</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>
                    <a href={member.url}>{member.url}</a>
                  </li>
                  <li>
                    <a href={`tel:${member.phone}`}>{member.phone}</a>
                  </li>
                  <li>Office: {member.office}</li>
                </ul>
              </Col>
            </Container>
          );
        })}
      </Row>
      <Row className="col-12">
        <button
          className="btn btn-secondary"
          onClick={() => props.resetDistrict()}
        >
          Back
        </button>
      </Row>
    </div>
  );
}

export default Details;
