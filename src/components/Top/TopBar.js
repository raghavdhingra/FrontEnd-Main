import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdMail } from "react-icons/md";
function TopBar() {
  return (
    <div>
      <Container fluid style={{ background: "#d8d9d0" }}>
        <Row>
          <Col sm="4" >
            <Row>
              <Col md={{span:3,offset:0}} sm={{span:12,offset:1}}>
                GTBIT
              </Col>
              <Col md={{span:9,offset:0}} sm={{span:12,offset:1}}>
                | GURU TEGH BAHADUR INSTITUTE{" "}
              </Col>
            </Row>
          </Col>

          <Col sm={{span:2,offset:6}} className="d-flex justify-content-around">
            <FaFacebook className="h-auto" />
            <FaTwitter className="h-auto" />
            <FaLinkedinIn className="h-auto" />
            <MdMail className="h-auto"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopBar;
