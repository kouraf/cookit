import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import db from '../config/fire';
import './LoginModal.css';

export default function LoginModal({ modal }) {
    const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
    const handleChangeLogin = (e) => {
        const target = e.target;
        setDataLogin({ ...dataLogin, [target.name]: target.value });
    }
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        db.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password)
            .then(() => {

            })
            .catch(error => {
                console.error("Error signing in with password and email", error);
            });
    }
    const [dataRegister, setDataRegister] = useState({ email: "", password: "" });
    const handleChangeRegister = (e) => {
        const target = e.target;
        setDataRegister({ ...dataRegister, [target.name]: target.value });
    }
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        db.auth().createUserWithEmailAndPassword(dataRegister.email, dataRegister.password).catch(function (error) {
            console.log(error)
        });
    }
    return (
        <Modal isOpen={modal} size="xl">
            <ModalHeader>Login or Register please</ModalHeader>
            <ModalBody>
                <Row>
                    <Col className='col_form' md={6}>
                        <Form className="login_form" onSubmit={handleSubmitLogin}>
                            <FormGroup row>
                                <Col md={2}>
                                    <Label for="exampleEmail" >Email</Label>
                                </Col>
                                <Col mc={10}>
                                    <Input onChange={handleChangeLogin} type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={2}>
                                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                                </Col>
                                <Col md={10}>
                                    <Input onChange={handleChangeLogin} type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" type="submit">Login</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <Form className="register_form" onSubmit={handleSubmitRegister}>
                            <FormGroup row>
                                <Col md={2}>
                                    <Label for="exampleEmail" >Email</Label>
                                </Col>
                                <Col mc={10}>
                                    <Input onChange={handleChangeRegister} type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={2}>
                                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                                </Col>
                                <Col md={10}>
                                    <Input onChange={handleChangeRegister} type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="d-flex justify-content-end">
                                <Button color="primary" type="submit">Register</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>

    )
}
