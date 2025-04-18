import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="TimeKeeping Management System"
              description="The TimeKeeping Management System is a web-based application designed to streamline and automate employee attendance, work hour tracking, and shift scheduling. Built with a focus on accuracy and efficiency, this system enables organizations to monitor employee time logs, generate reports, and manage payroll-related data with ease."
              ghLink="https://github.com/zylrey/TimeKeeping-Management-System"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Prison Management System"
              description="The Prison Management System is a comprehensive web-based application developed to efficiently manage the day-to-day operations of correctional facilities. This system provides tools for tracking inmate records, staff assignments, cell allocations, parole details, and visitor logs — all in a centralized and secure environment."
              ghLink="https://github.com/zylrey/Prison-Management-System"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="POS"
              description="The Point of Sale (POS) System is a user-friendly application designed to handle sales transactions, inventory management, and customer records in retail environments. This system simplifies the checkout process, provides real-time stock updates, and offers valuable insights through sales analytics, all within a responsive and secure platform."
              ghLink="https://github.com/zylrey/Z-POS-System"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
