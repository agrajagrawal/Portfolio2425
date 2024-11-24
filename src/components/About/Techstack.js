import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiGo,
  DiMysql,
  DiAws,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiSqlite,
  SiAmazonec2,
  SiAmazonaws,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Javascript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node JS">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React JS">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Mongo DB">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Go Lang">
        <DiGo />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="SQL">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Amazon Web services">
        <SiAmazonaws />
      </Col>
    </Row>
  );
}

export default Techstack;
