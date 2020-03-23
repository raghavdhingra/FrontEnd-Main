import React from 'react'
import Logo from '../../Image/GTBITlogo.png'
import {
    Container,
    Row,
    Col,
    Image
} from "react-bootstrap";

function MiddleBar() {
    return (<Container fluid>
        <Row>
        <Col xs="4" sm="2">
            <Image src={Logo} fluid/>
        </Col>
        <Col xs="8" sm="10">
            <Row>
                <Col sm="12"><h1 className="display-5">
                Guru Tegh Bahadur Institute Of Technology
                </h1>
                </Col>
                    
                <Col sm="12">
               <h5 className="display-5">
               Affliated to Guru Gobind Singh Indraprastha University, New Delhi
               </h5>
                   
                </Col>
            </Row>
        </Col>
        </Row>
        </Container>
    )
}

export default MiddleBar