import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './PostBox.css'

export default function PostBox() {
    return (
        <div className="PostBox d-flex">
            <div className="avatar">
                <img src="./cookit.svg" className="rounded-circle" alt="Cinque Terre" />
            </div>
            <Form className="col-10">
                <FormGroup row>
                    <Col>
                        <Input type="text" placeholder="Quoi de neuf ?" name="text" className="text" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label className="inputFile_lable" for="file">
                            <i>
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-image" className="svg-inline--fa fa-file-image fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"></path></svg>
                            </i>
                        </Label>
                    </Col>
                    <Col className="inputFile_container">
                        <Input type="file" className="file" id="file" />
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}
