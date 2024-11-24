import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! I'm <span className="purple">Agraj Agrawal</span> from <span className="purple">Firozabad (Agra), India.</span>
            <br />
            Currently, I'm working as a software developer at <span className="purple">smallcase</span>.
            <br />
            I hold a Bachelor's degree in Computer Science from <span className="purple">IET Lucknow</span>.
            <br />
            <br />
            Outside of coding, here are a few activities I love to indulge in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new content on YouTube (Tech, documentaries, and creative videos)
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoying different genres of music (It's my escape!)
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling to new places, experiencing different cultures, and capturing memories
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Know something about everything, and everything about something."{" "}
          </p>
          <footer className="blockquote-footer">Mantra of Life</footer>
        </blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
