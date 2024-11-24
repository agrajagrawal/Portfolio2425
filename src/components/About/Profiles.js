import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos,
    SiCodeforces,
    SiLeetcode,
    SiCodechef,
} from "react-icons/si";

function Profiles() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons" title="Leetcode">
                <a href="https://leetcode.com/u/agrajagrawal/" className="non-color-link" target="_blank">
                    <SiLeetcode />
                </a>
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Codeforces">
                <a href="https://codeforces.com/profile/agraj_" className="non-color-link" target="_blank">
                    <SiCodeforces />
                </a>
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Codechef">
                <a href="https://www.codechef.com/users/agrajagrawal" className="non-color-link" target="_blank">
                    <SiCodechef />
                </a>
            </Col>
        </Row>
    );
}

export default Profiles;
