import React, { Component} from 'react';
import { Bar, Line, Doughnut} from 'react-chartjs-2';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Progress,
  Row,
  FormGroup, InputGroup,InputGroupAddon,Input,
  Pagination, PaginationItem, PaginationLink, Table,
  ButtonGroup,
  Collapse, Button,
} from 'reactstrap';
import {Link} from "react-router-dom";
import CardFooter from "reactstrap/es/CardFooter";

const cardChartData3 = {
  labels: ['1','2','3', '4', '5', '6', '7', '8', '9'],
  datasets: [
    {
      backgroundColor: 'rgba(255,255,255,.4)',
      borderColor: 'rgba(255,255,255,.8)',
      data: [15, 34, 30, 40, 50, 34, 40, 65, 80],
      barPercentage: 0.6,
    },
  ],
};
const cardChartOpts1 = {
  tooltips: {
    enabled: false,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData3.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData3.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};
const cardChartOpts3 = {
  tooltips: {
    enabled: false,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 4,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};
const cardChartOpts4 = {
  tooltips: {
    enabled: false,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};
const doughnut = {
  labels: [
    'Hommes',
    'Femmes',
  ],
  datasets: [
    {
      data: [100, 63],
      backgroundColor: [
        '#F86C6B',
        '#20A8D8',
      ],
      hoverBackgroundColor: [
        '#F86C6B',
        '#20A8D8',
      ],
    }],
};
const doughnutOpts = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acc12:false,
      accordion12: [true, false],
      displayStyle12:["display:block;","display:none;"],
      colors1:["warning","light"],
      colors2:["danger","light"],

      acc3:false,
      accordion3: [true, false,false],
      displayStyle3:["display:block;","display:none;","display:none;"],
      colors3:["primary","light","light"],

      coopParSecteur:this.CoopParSecteur(),
      coopParRegion:this.CoopParRegion(),

      profitParSecteur:this.ProfitParSecteur(),
      profitParRegion:this.ProfitParRegion(),

      adherentParSecteur:this.AdherentParSecteur(),
      adherentParRegion:this.AdherentParRegion(),
      adherentParSexe:this.AdherentParSexe(),

      coopsTable:this.CoopsTable(),
    };
  }

  toggleAccordion12() {
    this.setState({
      acc12:!this.state.acc12,
    })
  }
  toggleSubAccordion12(tab) {
    const prevState = this.state.accordion12;
    if (prevState[tab] === false){
      const state = prevState.map((x, index) => tab === index ? !x : false);
      let prevDisp=["display:none;","display:none;"];
      let prevColor1=["light","light"];
      let prevColor2=["light","light"];
      prevDisp[tab]="display:block;";
      prevColor1[tab]=["warning"];
      prevColor2[tab]=["danger"];

      this.setState({
        tooltipOpen: [false, false],
        accordion12: state,
        displayStyle12:prevDisp,
        colors1:prevColor1,
        colors2:prevColor2,
      });
    }
    else
    {
      this.setState({
        acc12: !this.state.acc12,
      });
    }
  }

  toggle(i) {
    const newArray = this.state.tooltipOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      tooltipOpen: newArray,
    });
  }

  toggleAccordion3() {
    this.setState({
      acc3:!this.state.acc3,
    })
  }
  toggleSubAccordion3(tab) {
    const prevState = this.state.accordion3;
    if (prevState[tab] === false){
      const state = prevState.map((x, index) => tab === index ? !x : false);
      let prevDisp=["display:none;","display:none;","display:none;"];
      let prevColor=["light","light","light"];
      prevColor[tab]=["primary"];
      prevDisp[tab]="display:block;";
      this.setState({
        accordion3: state,
        displayStyle3:prevDisp,
        colors3:prevColor,
      });
    }
    else
    {
      this.setState({
        acc3: !this.state.acc3,
      });
    }
  }

  CoopParSecteur(){
    return(
        <ul>
          <div className="progress-group">
            <div className="progress-group-header">
              <span className="title">Secteur</span>
              <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="warning" value="56" />
            </div>
          </div>
          <div className="progress-group">
            <div className="progress-group-header">
              <span className="title">Secteur</span>
              <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="warning" value="15" />
            </div>
          </div>
        </ul>
    )
  }
  CoopParRegion(){
    return(
        <ul>
          <div className="progress-group">
            <div className="progress-group-header">
              <span className="title">Région</span>
              <span className="ml-auto font-weight-bold">20,120 <span className="text-muted small">(56%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="warning" value="80" />
            </div>
          </div>
          <div className="progress-group">
            <div className="progress-group-header">
              <span className="title">Région</span>
              <span className="ml-auto font-weight-bold">5,223 <span className="text-muted small">(15%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="warning" value="5" />
            </div>
          </div>
        </ul>
    )
  }

  ProfitParSecteur(){
    return(
        <ul>
          <div className="progress-group">
            <div className="progress-group-header">
              <span className="title">Secteur</span>
              <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="danger" value="56" />
            </div>
          </div>
          <div className="progress-group">
            <div className="progress-group-header">
              <span className="title">Secteur</span>
              <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="danger" value="15" />
            </div>
          </div>
        </ul>
    )
  }
  ProfitParRegion(){
    return(
        <ul>
          <div className="progress-group">
            <div className="progress-group-header">
              <span className="title">Région</span>
              <span className="ml-auto font-weight-bold">20,120 <span className="text-muted small">(56%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="danger" value="80" />
            </div>
          </div>
          <div className="progress-group">
            <div className="progress-group-header">
              <span className="title">Région</span>
              <span className="ml-auto font-weight-bold">5,223 <span className="text-muted small">(15%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="danger" value="5" />
            </div>
          </div>
        </ul>
    )
  }

  AdherentParSecteur(){
    return(
        <ul>
          <div className="progress-group mb-4">
            <div className="progress-group-prepend">Secteur</div>
            <div className="progress-group-bars mr-2">
              <Progress className="progress-xs" color="info" value="80" />
              <Progress className="progress-xs" color="danger" value="67" />
            </div>
            <div className="progress-group-prepend text-center font-weight-bold">20,120 <span className="text-muted small">(15020|5100)</span></div>
          </div>
          <div className="progress-group mb-4">
            <div className="progress-group-prepend">Secteur</div>
            <div className="progress-group-bars mr-2">
              <Progress className="progress-xs" color="info" value="40" />
              <Progress className="progress-xs" color="danger" value="30" />
            </div>
            <div className="progress-group-prepend text-center font-weight-bold">18,120 <span className="text-muted small">(13020|5100)</span></div>
          </div>
        </ul>
    )
  }
  AdherentParRegion(){
    return(
        <ul>
          <div className="progress-group mb-4">
            <div className="progress-group-prepend">Région</div>
            <div className="progress-group-bars mr-2">
              <Progress className="progress-xs" color="info" value="80" />
              <Progress className="progress-xs" color="danger" value="67" />
            </div>
            <div className="progress-group-prepend text-center font-weight-bold">20,120 <span className="text-muted small">(15020|5100)</span></div>
          </div>
          <div className="progress-group mb-4">
            <div className="progress-group-prepend">Région</div>
            <div className="progress-group-bars mr-2">
              <Progress className="progress-xs" color="info" value="40" />
              <Progress className="progress-xs" color="danger" value="30" />
            </div>
            <div className="progress-group-prepend text-center font-weight-bold">18,120 <span className="text-muted small">(13020|5100)</span></div>
          </div>
          <div className="progress-group mb-4">
            <div className="progress-group-prepend">Région</div>
            <div className="progress-group-bars mr-2">
              <Progress className="progress-xs" color="info" value="12" />
              <Progress className="progress-xs" color="danger" value="20" />
            </div>
            <div className="progress-group-prepend text-center font-weight-bold">10,120 <span className="text-muted small">(15020|5100)</span></div>
          </div>
        </ul>
    )
  }
  AdherentParSexe(){
    return(
        <div>
          <Row>
            <Col xs="3"/>
            <Col className="mt-4 text-center" xs="3">
              <Card className="ml-3 my-1 bg-primary"><h4>Hommes: 69%</h4></Card>
              <Card className="ml-3 bg-danger"><h4>Femmes: 31%</h4></Card>
            </Col>
            <Col xs="5">
              <Doughnut data={doughnut} options={doughnutOpts} height={100}/>
            </Col>
          </Row>
        </div>
    )
  }

  CoopsTable() {
    return(
      <div className="text-center">
        <Table responsive striped>
          <thead>
          <tr>
            <th>Coopérative</th>
            <th>Région</th>
            <th>Secteur</th>
          </tr>
          <tr>
            <th><Input type="text" className="text-center" placeholder="Chercher par Coopérative..." /></th>
            <th><Input type="text" className="text-center" placeholder="Chercher par Région..." /></th>
            <th><Input type="text" className="text-center" placeholder="Chercher par Secteur..." /></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Yiorgos Avraamu</td>
            <td>2012/01/01</td>
            <td>Member</td>
          </tr>
          <tr>
            <td>Avram Tarasios</td>
            <td>2012/02/01</td>
            <td>Staff</td>
          </tr>
          <tr>
            <td>Quintin Ed</td>
            <td>2012/02/01</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>Enéas Kwadwo</td>
            <td>2012/03/01</td>
            <td>Member</td>
          </tr>
          <tr>
            <td>Agapetus Tadeáš</td>
            <td>2012/01/21</td>
            <td>Staff</td>
          </tr>
          <tr>
            <td>Agapetus Tadeáš</td>
            <td>2012/01/21</td>
            <td>Staff</td>
          </tr>
          <tr>
            <td>Agapetus Tadeáš</td>
            <td>2012/01/21</td>
            <td>Staff</td>
          </tr>
          </tbody>
        </Table>
      </div>
    )
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <div className="mx-4">
        <Row>
          <Col xs="6">
            <Card>
              <CardHeader onClick={() => this.toggleAccordion12()} className="text-white bg-warning hoverPointer border-warning">
                <Row>
                  <Col><h1 className="display-4">Coopérative</h1></Col>
                  <Col><h1 className="mx-2 text-right display-4"><i className=" icon-people"/></h1></Col>
                </Row>
                <h1 className="display-3 mb-n5" ><strong>12.5k</strong></h1>
                <div className="mt-n5 mb-n2 mx-n3" style={{ height: '100px' }}>
                  <Line data={cardChartData3} options={cardChartOpts3} />
                </div>
              </CardHeader>
              <Collapse isOpen={this.state.acc12}>
                <ButtonGroup className="m-0 app-body">
                  <Button onClick={() => this.toggleSubAccordion12(0)}
                          className="btn-square" color={this.state.colors1[0]}>Par Secteur</Button>
                  <Button onClick={() => this.toggleSubAccordion12(1)}
                          className="btn-square" color={this.state.colors1[1]}>Par Région</Button>
                </ButtonGroup>
                <Row>
                  <Col Style={this.state.displayStyle12[0]}>
                    <Collapse isOpen={this.state.accordion12[0]}>
                      <CardBody>
                        {this.state.coopParSecteur}
                      </CardBody>
                    </Collapse>
                  </Col>

                  <Col Style={this.state.displayStyle12[1]}>
                    <Collapse isOpen={this.state.accordion12[1]}>
                      <CardBody>
                        {this.state.coopParRegion}
                      </CardBody>
                    </Collapse>
                  </Col>
                </Row>
              </Collapse>
            </Card>
          </Col>

          <Col xs="6">
            <Card>
              <CardHeader onClick={() => this.toggleAccordion12()} className="text-white bg-danger hoverPointer border-danger">
                <Row>
                  <Col><h1 className="display-4">Profit</h1></Col>
                  <Col><h1 className="mx-2 text-right display-4"><i className="icon-graph"/></h1></Col>
                </Row>
                <h1 className="display-3 mb-n5" ><strong>53.1K</strong></h1>
                <div className="mt-n5 mb-n2 mx-n3" style={{ height: '100px' }}>
                  <Line data={cardChartData3} options={cardChartOpts1} />
                </div>
              </CardHeader>
              <Collapse isOpen={this.state.acc12}>
                <ButtonGroup className="m-0 app-body">
                  <Button onClick={() => this.toggleSubAccordion12(0)}
                          className="btn-square" color={this.state.colors2[0]}>Par Secteur</Button>
                  <Button onClick={() => this.toggleSubAccordion12(1)}
                          className="btn-square" color={this.state.colors2[1]}>Par Région</Button>
                </ButtonGroup>
                <Row>
                  <Col Style={this.state.displayStyle12[0]}>
                    <Collapse isOpen={this.state.accordion12[0]}>
                      <CardBody>
                        {this.state.profitParSecteur}
                      </CardBody>
                    </Collapse>
                  </Col>

                  <Col Style={this.state.displayStyle12[1]}>
                    <Collapse isOpen={this.state.accordion12[1]}>
                      <CardBody>
                        {this.state.profitParRegion}
                      </CardBody>
                    </Collapse>
                  </Col>
                </Row>
              </Collapse>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader onClick={() => this.toggleAccordion3()} className="text-white bg-primary hoverPointer border-primary">
                <Row>
                  <Col><h1 className="display-4">Adhérent</h1></Col>
                  <Col><h1 className="mx-2 text-right display-4"><i className="icon-user"/></h1></Col>
                </Row>
                <h1 className="display-3 mb-n5" ><strong>53.1K</strong></h1>
                <div className="mt-n5 mb-n2 mx-n3" style={{ height: '100px' }}>
                  <Bar data={cardChartData3} options={cardChartOpts4} />
                </div>
              </CardHeader>

              <Collapse isOpen={this.state.acc3}>
                <ButtonGroup className="m-0 app-body">
                  <Button onClick={() => this.toggleSubAccordion3(0)}
                          className="btn-square" color={this.state.colors3[0]}>Par Secteur</Button>
                  <Button onClick={() => this.toggleSubAccordion3(1)}
                          className="btn-square" color={this.state.colors3[1]}>Par Région</Button>
                  <Button onClick={() => this.toggleSubAccordion3(2)}
                          className="btn-square" color={this.state.colors3[2]}>Par Sexe</Button>
                </ButtonGroup>
                <Row>
                  <Col Style={this.state.displayStyle3[0]}>
                    <Collapse isOpen={this.state.accordion3[0]}>
                      <CardBody>
                        {this.state.adherentParSecteur}
                      </CardBody>
                    </Collapse>
                  </Col>

                  <Col Style={this.state.displayStyle3[1]}>
                    <Collapse isOpen={this.state.accordion3[1]}>
                      <CardBody>
                        {this.state.adherentParRegion}
                      </CardBody>
                    </Collapse>
                  </Col>

                  <Col Style={this.state.displayStyle3[2]}>
                    <Collapse isOpen={this.state.accordion3[2]}>
                      <CardBody>
                        {this.state.adherentParSexe}
                      </CardBody>
                    </Collapse>
                  </Col>
                </Row>
              </Collapse>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader className="bg-dark">
                <h1 className="display-4">Liste des Coopératives au Maroc</h1>
              </CardHeader>
              {this.state.coopsTable}
              <hr className="p-0 mt-n3"/>
              <Card className="m-0 p-0 border-0 align-items-center">
                <Pagination>
                  <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>

                  <PaginationItem active><PaginationLink tag="button">1</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>

                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </Card>
          </Card>
          </Col>
        </Row>
        <hr/>
      </div>
    );
  }
}

export default Dashboard;
