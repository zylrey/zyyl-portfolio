import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
  Hey there! I'm <span className="purple">Zyl Arpon</span> from <span className="purple">General Santos City, Philippines</span>.
  <br />
  I'm currently working as a freelance software developer, diving into various cool projects.
  <br />
  <br />
  Outside of coding, I enjoy spending time on other fun and creative activities!
</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">zyl</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
