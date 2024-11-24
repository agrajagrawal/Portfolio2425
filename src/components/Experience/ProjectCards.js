import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsPersonWorkspace } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.role}</Card.Text>
        <Card.Text>{props.duration}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        { props.workLink && <Button variant="primary" href={props.workLink} target="_blank">
           Project
        </Button> }
        
        
        {/* {"\n"}
        {"\n"} */}
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
