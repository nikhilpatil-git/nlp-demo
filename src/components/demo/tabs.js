import React, { useState } from "react";
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

function NameList(props) {
  const names = props.name;
  const listItems = names.map((name) =>
    <li>{name}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export const AnalyzeTabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Names
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Emails
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Numbers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            PNouns
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <NameList name={props.data.name} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <NameList name={props.data.email} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <NameList name={props.data.num} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <NameList name={props.data.pnoun} />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};
