import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiLinux } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGit,
  SiApachekafka,
  SiKibana,
  SiGoogleanalytics,
  SiJenkins,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Kafka">
        <SiApachekafka />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Kibana">
        <SiKibana />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Google Analytics">
        <SiGoogleanalytics />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jenkins">
        <SiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Linux">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;
