import React from 'react';
import ReactDOM from 'react-dom';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import { 
    Card, Button, CardHeader, CardBody,
    CardTitle, CardText, Container, Row, Col,
    Nav, NavItem, NavLink, TabContent, TabPane
 } from 'reactstrap';
 import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

 const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true  // enable click to select
  };

const Intent = ({
    Intents,
    tabIndex,
    onChangeTab
}) => (
    <div>
        <Row>
            <Col><h3>意图引擎</h3></Col>
            <Col>
                    <Button color="primary">下载现有意图</Button>{' '}
                    <Button color="primary">下载意图模板</Button>{' '}
                    <Button color="primary">批量导入意图</Button>{' '}
            </Col>  
            
        </Row>
        <Row>
            <Col>
                <Row>
                <Col><b>意图 : 106 组 意图语料 : 876462 条</b><br/></Col>
                </Row>
                <Row>
                <Col><b>最后修改 : 2018-04-16 13:25:59</b></Col>
                </Row>
                <hr />
                <Card>
                    <CardHeader>已有意图 </CardHeader>
                    <CardBody>
                    <BootstrapTable data={Intents}  insertRow={ true } striped hover search version="4" pagination selectRow= { selectRowProp }>
                        <TableHeaderColumn isKey dataField="intent_name"> 意图名称 </TableHeaderColumn>
                    </BootstrapTable>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card>
                    <CardHeader>意图名称 </CardHeader>
                    <CardBody>
                    <Nav tabs>
                        <NavItem>
                            <NavLink onClick={onChangeTab("1")}>
                             正例
                             <span class="badge badge-pill badge-success" style={{marginLeft:"6px"}}> 155</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={onChangeTab("2")}>
                             反例
                             <span class="badge badge-pill badge-danger" style={{marginLeft:"6px"}}> 6897</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={tabIndex}>
                        <TabPane tabId="1">
                            <BootstrapTable data={Intents} insertRow={ true } striped hover search version="4" pagination selectRow= { selectRowProp }>
                                <TableHeaderColumn isKey dataField="intent_name"> 语料列表 </TableHeaderColumn>
                            </BootstrapTable>
                        </TabPane>
                        <TabPane tabId="2">
                            <BootstrapTable data={Intents} striped hover search version="4" pagination selectRow= { selectRowProp }>
                                <TableHeaderColumn isKey dataField="intent_name"> 意图名称 </TableHeaderColumn>
                            </BootstrapTable>
                        </TabPane>
                    </TabContent>
                    </CardBody>
                </Card>
            </Col>
      </Row>
    </div>
);
      


export default Intent;