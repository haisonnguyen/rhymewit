import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Button } from 'react-bootstrap'

import { ChevronDownIcon } from '@primer/octicons-react'
import girl from './girl.png';

function Main() {
    return (
        <Container style={{ height: "80vh", width: "100vw", marginTop: "40px"}}>
            <Row style={{ height: "70%", width: "100%", marginTop: "5%" }}>
                <Col>
                    <Card className="shadow " style={{ height: "80%" }}>
                        <Row className="no-gutters d-flex justify-content-start align-items-center" style={{ height: "100%" }}>
                            <Col>
                                <Card.Body style={{ fontSize: "2.3vw", fontWeight: "bold", height: "100%" }}>
                                    <Card.Text className="text-left" style={{ height: "100%" }}>
                                        Tired of boring quizzes all the <span style={{ color: "#FFFFFF", backgroundColor: "#f26524", }}>time</span>?
                                    <br></br><br></br>
                                Use <span style={{ color: "#f26524" }}>Rhyme</span><span style={{ color: "#faab53" }}>wit </span> so students learn <br></br> through <span style={{ fontWeight: "bold", color: "#f26524" }}>__________</span> .
                                </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col>
                                <Card.Img style={{ height: "300px", width: "300px", boxShadow: "20px 20px #f26524" }} src={girl}>
                                </Card.Img>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row style={{ height: "10%", width: "100%" }}>
                <Col md={{ span: 6, offset: 3 }}>
                    <Button size="lg" style={{ backgroundColor: "#24509e" }}>
                        Try a Rhymequiz
                    </Button>
                </Col>
            </Row>
            <Row style={{ height: "10%", width: "100%" }}>
                <Col md={{ span: 6, offset: 3 }}>
                    <ChevronDownIcon size={24} />
                </Col>
            </Row>
        </Container>
    )
}

export default Main;