import React, { Component} from 'react';
import { Bar, Line, Doughnut} from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
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
    custom: CustomTooltips
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
    custom: CustomTooltips
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
    custom: CustomTooltips
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
      acc12:true,
      accordion12: [true, false],
      displayStyle12:["display:block;","display:none;"],
      colors1:["warning","light"],
      colors2:["danger","light"],

      acc3:true,
      accordion3: [true, false,false],
      displayStyle3:["display:block;","display:none;","display:none;"],
      colors3:["primary","light","light"],

      acc4:true,
      accordion4: [true, false],
      displayStyle4:["display:block;","display:none;"],
      colors4:["dark","light"],

      acc567:true,

      coopParSecteur:this.CoopParSecteur(),
      coopParRegion:this.CoopParRegion(),

      profitParSecteur:this.ProfitParSecteur(),
      profitParRegion:this.ProfitParRegion(),

      adherentParSecteur:this.AdherentParSecteur(),
      adherentParRegion:this.AdherentParRegion(),
      adherentParSexe:this.AdherentParSexe(),

      vente:this.Vente(),
      communication:this.Communication(),
      canal:this.Canal(),
      formation:this.Formation(),
      evenement:this.Evenement(),

      coopsTable:this.CoopsTable(),
    };
  }

  toggleAccordion12() {
    this.setState({
      acc12:!this.state.acc12,
      acc3:!this.state.acc3,
    })
  }
  toggleSubAccordionMain12(tab) {
    let prevState = this.state.accordion12;
    const state = prevState.map((x, index) => tab === index ? !x : false);
    let prevDisp=["display:none;","display:none;"];
    let prevColor1=["light","light"];
    let prevColor2=["light","light"];
    prevDisp[tab]="display:block;";
    prevColor1[tab]=["warning"];
    prevColor2[tab]=["danger"];

    this.setState({
      accordion12: state,
      displayStyle12:prevDisp,
      colors1:prevColor1,
      colors2:prevColor2,
    });
  }
  toggleSubAccordion12(tab) {
    this.toggleSubAccordion3(tab);
    let prevState = this.state.accordion12;
    if (prevState[tab] === true){
      this.setState({
        acc12: !this.state.acc12,
        acc3:!this.state.acc3,
      });
    }
  }

  toggleAccordion3() {
    this.setState({
      acc12:!this.state.acc12,
      acc3:!this.state.acc3,
    })
  }
  toggleSubAccordion3(tab) {
    if(tab<2 && this.state.accordion12[tab]===false)
    {
      this.toggleSubAccordionMain12(tab);
    }
    let prevState = this.state.accordion3;
    if (prevState[tab] === false){
      const state = prevState.map((x, index) => tab === index ? !x : false);
      let prevDisp=["display:none;","display:none;","display:none;"];
      let prevColor3=["light","light","light"];

      prevColor3[tab]=["primary"];
      prevDisp[tab]="display:block;";

      this.setState({
        accordion3: state,
        displayStyle3:prevDisp,
        colors3:prevColor3,
      });
    }
    else
    {
      this.setState({
        acc3: !this.state.acc3,
        acc12:!this.state.acc12,
      });
    }
  }

  toggleAccordion4() {
    this.setState({
      acc4:!this.state.acc4,
      acc567:!this.state.acc567,
    })
  }
  toggleSubAccordion4(tab) {
    let prevState = this.state.accordion4;
    if (prevState[tab] === false){
      const state = prevState.map((x, index) => tab === index ? !x : false);
      let prevDisp=["display:none;","display:none;"];
      let prevColor4=["light","light"];

      prevColor4[tab]=["dark"];
      prevDisp[tab]="display:block;";

      this.setState({
        accordion4: state,
        displayStyle4:prevDisp,
        colors4:prevColor4,
      });
    }
    else
    {
      this.setState({
        acc567:!this.state.acc567,
        acc4: !this.state.acc4,
      });
    }
  }

  toggleAccordion567() {
    this.setState({
      acc567:!this.state.acc567,
      acc4:!this.state.acc4,
    })
  }

  CoopParSecteur(){
    return(
        <ul>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">
              <span className="title">Secteur</span>
              <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="warning" value="56" />
              <Progress className="progress-xs" color="white" value="100" />
            </div>
          </div>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">
              <span className="title">Secteur</span>
              <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="warning" value="15" />
              <Progress className="progress-xs" color="white" value="100" />
            </div>
          </div>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">
              <span className="title">Secteur</span>
              <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="warning" value="56" />
              <Progress className="progress-xs" color="white" value="100" />
            </div>
          </div>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">
              <span className="title">Secteur</span>
              <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="warning" value="15" />
              <Progress className="progress-xs" color="white" value="100" />
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
              <Progress className="progress-xs" color="white" value="100" />
            </div>
          </div>
          <div className="progress-group">
            <div className="progress-group-header">
              <span className="title">Région</span>
              <span className="ml-auto font-weight-bold">5,223 <span className="text-muted small">(15%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="warning" value="5" />
              <Progress className="progress-xs" color="white" value="100" />
            </div>
          </div>
        </ul>
    )
  }

  ProfitParSecteur(){
    return(
        <ul>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">
              <span className="title">Secteur</span>
              <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="danger" value="56" />
              <Progress className="progress-xs" color="white" value="100" />
            </div>
          </div>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">
              <span className="title">Secteur</span>
              <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="danger" value="15" />
              <Progress className="progress-xs" color="white" value="100" />
            </div>
          </div>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">
              <span className="title">Secteur</span>
              <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
            </div>
            <div className="progress-group-bars ">
              <Progress className="progress-xs" color="danger" value="56" />
              <Progress className="progress-xs" color="white" value="100" />
            </div>
          </div>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">
              <span className="title">Secteur</span>
              <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="danger" value="15" />
              <Progress className="progress-xs" color="white" value="100" />
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
              <Progress className="progress-xs" color="white" value="100" />
            </div>
          </div>
          <div className="progress-group">
            <div className="progress-group-header">
              <span className="title">Région</span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="danger" value="5" />
              <Progress className="progress-xs" color="white" value="100" />
            </div>
          </div>
        </ul>
    )
  }

  AdherentParSecteur(){
    return(
        <ul>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">Secteur
              <span className="ml-auto font-weight-bold">18,120 <span className="text-muted small">(13020|5100)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="info" value="80" />
              <Progress className="progress-xs" color="danger" value="67" />
            </div>
          </div>

          <div className="progress-group ml-n5">
            <div className="progress-group-header">Secteur
              <span className="ml-auto font-weight-bold">18,120 <span className="text-muted small">(13020|5100)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="info" value="80" />
              <Progress className="progress-xs" color="danger" value="67" />
            </div>
          </div>


          <div className="progress-group ml-n5">
            <div className="progress-group-header">Secteur
              <span className="ml-auto font-weight-bold">18,120 <span className="text-muted small">(13020|5100)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="info" value="80" />
              <Progress className="progress-xs" color="danger" value="67" />
            </div>
          </div>

          <div className="progress-group ml-n5">
            <div className="progress-group-header">Secteur
              <span className="ml-auto font-weight-bold">18,120 <span className="text-muted small">(13020|5100)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="info" value="80" />
              <Progress className="progress-xs" color="danger" value="67" />
            </div>
          </div>
        </ul>
    )
  }
  AdherentParRegion(){
    return(
        <ul>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">Region
              <span className="ml-auto font-weight-bold">18,120 <span className="text-muted small">(13020|5100)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="info" value="80" />
              <Progress className="progress-xs" color="danger" value="67" />
            </div>
          </div>

          <div className="progress-group ml-n5">
            <div className="progress-group-header">Region
              <span className="ml-auto font-weight-bold">18,120 <span className="text-muted small">(13020|5100)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="info" value="80" />
              <Progress className="progress-xs" color="danger" value="67" />
            </div>
          </div>
        </ul>
    )
  }
  AdherentParSexe(){
    return(
        <div>
          <Row>
            <Col xs="6"><Card className="text-center pt-2 mx-n2 btn-outline-primary"><h6>Hommes: 69%</h6></Card></Col>
            <Col xs="6"><Card className="text-center pt-2 mx-n2 btn-outline-danger"><h6>Femmes: 31%</h6></Card></Col>

              <Doughnut data={doughnut} options={doughnutOpts} height={100}/>
          </Row>
        </div>
    )
  }

  Vente(){
    return(
      <ul>
        <div className="progress-group ml-n5">
          <div className="progress-group-header">
            <span className="title">Coop1</span>
            <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
          </div>
          <div className="progress-group-bars">
            <Progress className="progress-xs" color="success" value="56" />
          </div>
        </div>
        <div className="progress-group ml-n5">
          <div className="progress-group-header">
            <span className="title">Copp1</span>
            <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
          </div>
          <div className="progress-group-bars">
            <Progress className="progress-xs" color="success" value="15" />
          </div>
        </div>
      </ul>
      )
  }
  Communication(){
    return(
        <ul>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">
              <span className="title">Coop1</span>
              <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="success" value="56" />
            </div>
          </div>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">
              <span className="title">Copp1</span>
              <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="success" value="15" />
            </div>
          </div>
        </ul>
    )
  }
  Canal(){
    return(
        <Doughnut data={doughnut} options={doughnutOpts} height={120}/>
    )
  }
  Formation(){
    return(
        <ul>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">
              <span className="title">Coop1</span>
              <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="success" value="56" />
            </div>
          </div>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">
              <span className="title">Copp1</span>
              <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="success" value="15" />
            </div>
          </div>
        </ul>
    )
  }
  Evenement(){
    return(
        <ul>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">
              <span className="title">Coop1</span>
              <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="success" value="56" />
            </div>
          </div>
          <div className="progress-group ml-n5">
            <div className="progress-group-header">
              <span className="title">Copp1</span>
              <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
            </div>
            <div className="progress-group-bars">
              <Progress className="progress-xs" color="success" value="15" />
            </div>
          </div>
        </ul>
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

  render() {
    return (
      <div className="mx-4">
        <Row>
          <Col xs="4">
            <Card>
              <CardHeader onClick={() => this.toggleAccordion12()} className="text-white bg-warning hoverPointer border-warning">
                <Row>
                  <Col><h2 >Coopérative</h2></Col>
                  <Col><h1 className="mx-2 text-right"><i className=" icon-people"/></h1></Col>
                </Row>
                <h1 className="mt-n3 mb-3" ><strong>12.5k</strong></h1>
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

          <Col xs="4">
            <Card>
              <CardHeader onClick={() => this.toggleAccordion12()} className="text-white bg-danger hoverPointer border-danger">
                <Row>
                  <Col><h2>Profit</h2></Col>
                  <Col><h1 className="mx-2 text-right"><i className="icon-graph"/></h1></Col>
                </Row>
                <h1 className="mt-n3 mb-3" ><strong>53.5k</strong></h1>
                <div className="mt-n5 mb-n3 mx-n3" style={{ height: '108px' }}>
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
          
          <Col  xs="4">
            <Card>
              <CardHeader onClick={() => this.toggleAccordion3()} className="text-white bg-primary hoverPointer border-primary">
                <Row>
                  <Col><h2>Adhérent</h2></Col>
                  <Col><h1 className="mx-2 text-right"><i className="icon-user"/></h1></Col>
                </Row>
                <h1 className="mt-n3 mb-3"><strong>53.1K</strong></h1>
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
          <Col xs="3">
            <Card>
              <CardHeader onClick={() => this.toggleAccordion4()} className="text-white bg-gray-700 hoverPointer border-dark">
                <Row>
                  <Col><h4 className="ml-n2">Communication</h4></Col>
                  <Col><h3 className="mr-n3 text-right"><i className=" icon-people"/></h3></Col>
                </Row>
                <h3 className="mb-3" ><strong>12.5k</strong></h3>
                <div className="mt-n5 mb-n2 mx-n3" style={{ height: '50px' }}>
                  <Line data={cardChartData3} options={cardChartOpts3} />
                </div>
              </CardHeader>
              <Collapse isOpen={this.state.acc4}>
                <ButtonGroup className="m-0 app-body">
                  <Button onClick={() => this.toggleSubAccordion4(0)}
                          className="btn-square" color={this.state.colors4[0]}>Par coopératives</Button>
                  <Button onClick={() => this.toggleSubAccordion4(1)}
                          className="btn-square" color={this.state.colors4[1]}>Par Canals </Button>
                </ButtonGroup>
                <Row>
                  <Col Style={this.state.displayStyle4[0]}>
                    <Collapse isOpen={this.state.accordion4[0]}>
                      <CardBody>
                        {this.state.communication}
                      </CardBody>
                    </Collapse>
                  </Col>
                  <Col Style={this.state.displayStyle4[1]}>
                    <Collapse isOpen={this.state.accordion4[1]}>
                      <CardBody>
                        {this.state.canal}
                      </CardBody>
                    </Collapse>
                  </Col>
                </Row>
              </Collapse>
            </Card>
          </Col>

          <Col xs="3">
            <Card>
              <CardHeader onClick={() => this.toggleAccordion567()} className="text-white bg-gray-700 hoverPointer border-dark">
                <Row>
                  <Col><h4 >Ventes</h4></Col>
                  <Col><h3 className="mx-2 text-right"><i className=" icon-people"/></h3></Col>
                </Row>
                <h3 className="mb-3" ><strong>12.5k</strong></h3>
                <div className="mt-n5 mb-n2 mx-n3" style={{ height: '50px' }}>
                  <Line data={cardChartData3} options={cardChartOpts3} />
                </div>
              </CardHeader>
              <Collapse isOpen={this.state.acc567}>
                <ButtonGroup className="m-0 app-body">
                  <Button className="btn-square" color="dark">Par coopératives</Button>
                </ButtonGroup>
                <Row>
                  <Col>
                    <Collapse isOpen={true}>
                      <CardBody>
                        {this.state.vente}
                      </CardBody>
                    </Collapse>
                  </Col>
                </Row>
              </Collapse>
            </Card>
          </Col>


          <Col xs="3">
          <Card>
            <CardHeader onClick={() => this.toggleAccordion567()} className="text-white bg-gray-700 hoverPointer border-dark">
              <Row>
                <Col><h4 >Formations</h4></Col>
                <Col><h3 className="mx-2 text-right"><i className=" icon-people"/></h3></Col>
              </Row>
              <h3 className="mb-3" ><strong>12.5k</strong></h3>
              <div className="mt-n5 mb-n2 mx-n3" style={{ height: '50px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} />
              </div>
            </CardHeader>
            <Collapse isOpen={this.state.acc567}>
              <ButtonGroup className="m-0 app-body">
                <Button className="btn-square" color="dark">Par coopératives</Button>
              </ButtonGroup>
              <Row>
                <Col>
                  <Collapse isOpen={true}>
                    <CardBody>
                      {this.state.formation}
                    </CardBody>
                  </Collapse>
                </Col>
              </Row>
            </Collapse>
          </Card>
        </Col>

          <Col xs="3">
          <Card>
            <CardHeader onClick={() => this.toggleAccordion567()} className="text-white bg-gray-700 hoverPointer border-dark">
              <Row>
                <Col><h4 >Evénements</h4></Col>
                <Col><h3 className="mx-2 text-right"><i className=" icon-people"/></h3></Col>
              </Row>
              <h3 className="mb-3" ><strong>12.5k</strong></h3>
              <div className="mt-n5 mb-n2 mx-n3" style={{ height: '50px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} />
              </div>
            </CardHeader>
            <Collapse isOpen={this.state.acc567}>
              <ButtonGroup className="m-0 app-body">
                <Button className="btn-square" color="dark">Par coopératives</Button>
              </ButtonGroup>
              <Row>
                <Col>
                  <Collapse isOpen={true}>
                    <CardBody>
                      {this.state.evenement}
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
