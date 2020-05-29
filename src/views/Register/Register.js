import React, { Component } from 'react';
import {Button, Card, CardBody, ButtonGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, TabPane,CardHeader,Collapse, TabContent, Row } from 'reactstrap';

class Register extends Component {
  constructor(props) {
    super(props);

    this.tabPane=this.tabPane.bind(this);
    this.newMember=this.newMember.bind(this);
    this.switchTab = this.switchTab.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);

    this.state = {
      activeTab: new Array(1).fill('1'),
      activeIndex:1,
      membersNumber:0,
      accordion: [],
    };
  }
  switchTab(i) {
    const newArray = this.state.activeTab.slice();
    const index=this.state.activeIndex+i;
    newArray[0] = index.toString();
    this.setState({
      activeIndex: index,
      activeTab: newArray,
    })

  }

  toggleAccordion(tab) {
    const prevState = this.state.accordion;

    for(let i=0;i<prevState.length;i++) {
      prevState[i]=false;
    }
    prevState[tab]=true;

    this.setState({
      accordion: prevState,
    });
  }

  addMemberContent() {
    return (
        <Form>
          <Row className="mb-3 justify-content-center">
            <h5 className="ml-3 mr-2 mt-2">Le nouveau membre est un </h5>
            <ButtonGroup>
              <Button color="white" className="btn-outline-primary">Fondateur</Button>
              <Button color="white" className="btn-outline-primary">Président</Button>
              <Button color="white" className="btn-outline-primary">Manager</Button>
              <Button color="white" className="btn-outline-primary">Mandataire</Button>
              <Button color="white" className="btn-outline-primary">Adhérent</Button>
            </ButtonGroup>
          </Row>

          <Row className="mb-3">
            <Col xs="8">
              <h6 className="font-lg">Nom complet</h6>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><i className="icon-user"/></InputGroupText>
                </InputGroupAddon>
                <Input type="text" placeholder="Veuillez saisir le nom complet..." autoComplete="username"/>
              </InputGroup>
            </Col>
            <Col>
              <h6 className="font-lg">Sexe</h6>
              <Input type="select" name="ccmonth" id="ccmonth">
                <option value="1">Homme</option>
                <option value="2">Femme</option>
                <option value="3">Autre</option>
              </Input>
            </Col>
          </Row>
          <hr/>
          <Row className="mb-3">
            <Col>
              <h6 className="font-lg">Identité (<em>optionnel</em>)</h6>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><i className="icon-credit-card"/></InputGroupText>
                </InputGroupAddon>
                <Input type="text" placeholder="Veuillez saisir le CIN..." autoComplete="email"/>
              </InputGroup>
            </Col>
            <Col>
              <h6 className="font-lg">Adresse Email (<em>optionnel</em>)</h6>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input type="text" placeholder="Veuillez saisir l'adresse email..." autoComplete="email"/>
              </InputGroup>
            </Col>
            <Col>
              <h6 className="font-lg">N.Téléphone (<em>optionnel</em>)</h6>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><i className="icon-phone"/></InputGroupText>
                </InputGroupAddon>
                <Input type="text" placeholder="Veuillez saisir le N.Téléphone..." autoComplete="email"/>
              </InputGroup>
            </Col>
          </Row>
          <br/>
        </Form>
    )
  }

  newMember(n) {
    return(
        <Card className="mb-0">
          <CardHeader id="headingOne">
            <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(n)}>
              <h5 className="m-0 p-0">Member {(n+1).toString()}</h5>
            </Button>
          </CardHeader>
          <Collapse isOpen={this.state.accordion[n]}>
            <CardBody>
              {this.addMemberContent()}
            </CardBody>
          </Collapse>
        </Card>
    )
  }

  createMembers(n) {
    console.log(n)
    let members=[];
    let newAccordion=[];
    for(let i=0;i<n;i++)
    {
      members.push(this.newMember(i));
      newAccordion.push(false);
    }

    newAccordion[0]=true;
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.accordion=newAccordion;
    return members;
  }

  tabPane() {
    return (
        <>
          <TabPane tabId="1">
              <Form>
                <h1>Demande d'inscription</h1>
                <hr/>
                <Row className="mb-3">
                  <Col>
                    <h6 className="font-lg">Coopérative</h6>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="icon-user"/></InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Veuillez saisir le nom de votre coopérative..." autoComplete="username" />
                    </InputGroup>
                  </Col>
                </Row>

                <hr/>

                <Row className="mb-3">
                  <Col>
                    <h6 className="font-lg">Adresse</h6>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="icon-location-pin"/></InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Veuillez saisir l'adresse de votre coopérative..." autoComplete="email" />
                    </InputGroup>
                  </Col>
                  <Col>
                    <h6 className="font-lg">Code postal</h6>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="icon-envelope"/></InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Veuillez saisir le Code postal..." autoComplete="email" />
                    </InputGroup>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <h6 className="font-lg">Région</h6>
                    <Input type="select" name="ccmonth" id="ccmonth">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </Input>
                  </Col>
                  <Col>
                    <h6 className="font-lg">Ville</h6>
                    <Input type="select" name="ccmonth" id="ccmonth">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </Input>
                  </Col>
                </Row>

                <hr/>

                <Row>
                  <Col>
                    <h6 className="font-lg">Secteur</h6>
                    <Input type="select" name="ccmonth" id="ccmonth">
                      <option value="ff">ff</option>
                      <option value="tt">tt</option>
                      <option value="dd">dd</option>
                      <option value="gg">gg</option>
                    </Input>
                  </Col>
                  <Col>
                    <h6 className="font-lg">Nombre d'adhérents</h6>
                    <Input type="text" placeholder="Veuillez saisir le nombre total d'adhérents..." onChange={(e)=>{
                      let i=e.target.value;
                      this.setState({membersNumber:i,})
                    }}/>
                  </Col>
                </Row>
                <br/>
              </Form>
          </TabPane>

          <TabPane tabId="2">
            <Form>
              <h1>Demande d'inscription</h1>
              <hr/>

              <Row className="mb-3 justify-content-center">
                <h5 className="ml-3 mr-2 mt-2">Je suis le </h5>
                <ButtonGroup>
                  <Button color="white" className="btn-outline-primary">Fondateur</Button>
                  <Button color="white" className="btn-outline-primary">Président</Button>
                  <Button color="white" className="btn-outline-primary">Manager</Button>
                  <Button color="white" className="btn-outline-primary">Mandataire</Button>
                </ButtonGroup>
              </Row>

              <Row className="mb-3">
                <Col>
                  <h6 className="font-lg">Nom complet</h6>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="icon-user"/></InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Veuillez saisir votre nom complet..." autoComplete="username" />
                  </InputGroup>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <h6 className="font-lg">Identité</h6>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="icon-credit-card"/></InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Veuillez saisir votre CIN..." autoComplete="email" />
                  </InputGroup>
                </Col>
                <Col>
                  <h6 className="font-lg">Sexe</h6>
                  <Input type="select" name="ccmonth" id="ccmonth">
                    <option value="1">Homme</option>
                    <option value="2">Femme</option>
                    <option value="3">Autre</option>
                  </Input>
                </Col>
              </Row>

              <hr/>
              <Row>
                <Col>
                  <h6 className="font-lg">Adresse Email</h6>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Veuillez saisir l'adresse de votre adresse email..." autoComplete="email" />
                  </InputGroup>
                </Col>
                <Col>
                  <h6 className="font-lg">N.Téléphone</h6>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="icon-phone"/></InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Veuillez saisir votre numéro de téléphone..." autoComplete="email" />
                  </InputGroup>
                </Col>
              </Row>

              <br/>
            </Form>
          </TabPane>

          <TabPane tabId="3">
            <h1>Demande d'inscription</h1>
            <hr/>
            <CardBody>
              <div>
                {this.createMembers(this.state.membersNumber-1)}
              </div>
            </CardBody>
          </TabPane>

          <TabPane tabId="4">
            <h1>Demande d'inscription</h1>
            <hr/>
            <CardBody>
              <div className="text-center">
                <h3>Merci d'avoir soumis votre demande d'inscription sur notre plateforme, pouvez-vous s'il vous plaît confirmer les données que vous avez saisies ?</h3>
                <br/>
                <Button color="white" href="#/home" className="px-4 mx-5 btn btn-outline-danger">Annuler</Button>
                <Button color="white" href="#/login" className="px-3 mx-5 btn btn-outline-success">Comfirmer</Button>
              </div>
            </CardBody>
          </TabPane>
        </>
    );
  }

  render() {
    return (
      <div className="flex-row align-items-center">
        <Container>

          <Row className="mt-n2 mb-2 justify-content-center">
            <Col>
              <div className="text-center">
                <Button className="px-4 btn btn-primary" onClick={() => { this.switchTab(-1); }}>Prev</Button>
                <Button className="px-4 btn btn-primary">{this.state.activeIndex}/4</Button>
                <Button className="px-4 btn btn-primary" onClick={() => { this.switchTab(+1); }}>Next</Button>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col>
              <Card className="mx-4" >
                  <TabContent activeTab={this.state.activeTab[0]}>
                    {this.tabPane()}
                  </TabContent>
              </Card>
            </Col>
          </Row>


        </Container>
      </div>
    );
  }
}

export default Register;
