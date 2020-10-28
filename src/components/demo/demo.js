import React, { useEffect, useState } from "react";
import _ from 'lodash';

import "../start/start.css";
import classnames from "classnames";
import {
  Container,
  Row,
  Col,
  Alert,
  FormGroup,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import { AnalyzeTabs } from "./tabs";
import axios from "axios";

export const Demo = () => {

  const [data, setData] = useState({});
  const [text, setText] = useState("");

  const handleChange = (event) => {
    if(event.target.value){
      var v = event.target.value;
      if(v !== null && v.length > 1){
        setText(() => v);
      }
    }
  };

    const handleAnalyze = async ()  => {
        const response = await axios({
            method: 'post',
            url: 'https://nlp-py-j6gfahbwra-uc.a.run.app/test',
            data: {
                "body":{text}
            }
        });

        if(!_.isEmpty(response.data)){
          setData(() => response.data);
        }
  }

    useEffect(() => {
      if(data){
      console.log(data);
      }
    });

  return (
    <div className="button-grid">
      <Container>
        <Row>
          <Alert style={{ marginTop: "20px" }} color="primary">
            <h1>Natural Language API demo</h1>
          </Alert>
        </Row>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Input onChange={handleChange} type="textarea" name="text" />
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <Button color="primary" onClick={() => handleAnalyze()}>Analyze</Button>
          </Col>
        </Row>
        <Row>
          {!_.isEmpty(data) && <AnalyzeTabs data={data} />}          
        </Row>
      </Container>
    </div>
  );
};
