import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experiences </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are a few roles I've held and my contributions.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.smallcase.com/static/svgs/logo-full.svg"
              isBlog={false}
              title="Smallcase"
              role="SDE 1"
              duration="Mar 2024 - Present"
              description="Developed a seamless payment service and checkout flow, integrated Loans and Mutual Funds, enhanced success with Juspay, and optimized logging with APM, Kibana, and Sentry."
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://staticg.sportskeeda.com/logo/brand_logos/full-vector.svg"
              isBlog={false}
              title="Sportskeeda"
              role="SDE 1"
              workLink="https://www.profootballnetwork.com/nfl-playoff-predictor"
              duration="Jul 2023 - Feb 2024"
              description="Developed Playoff Predictor, ranking 4th on Google US with 600k users. Led PFN's tech team in WordPress migration, integrated Google Analytics, and contributed to Multi-User UI development using ReactJs, AWS, PHP."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.smallcase.com/static/svgs/logo-full.svg"
              isBlog={false}
              title="Smallcase"
              role="SDE Intern"
              duration="Sep 2022 - May 2023"
              description="
Automated manager offboarding, reducing dev attention on ops tickets by 85%. Developed Discover API with microservices, cron job for equity calculations, and offer config, cutting business workload by 30%."/>
          </Col>
        </Row>
        <p style={{ color: "white" }}>
        Please refer to the Resume section for more information on my internship experience.
        </p>
      </Container>
    </Container>
  );
}

export default Experience;
