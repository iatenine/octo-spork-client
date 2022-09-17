import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFetchMembers } from "../hooks/useFetchMembers";

function Details() {
  const { members, setStateCode, setDistrict } = useFetchMembers();
  // For testing purposes, should replace with cleaner code soon
  // useEffect(() => {
  //   setStateCode("LA");
  //   setDistrict(2);
  // });

  return (
    <Row xs={2} md={4} lg={6}>
      {members.map((member) => {
        return (
          <Container key={member._id}>
            <Col>
              <h3>{`${member.title} ${member.first_name} ${member.last_name}`}</h3>
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
  );
}

export default Details;
