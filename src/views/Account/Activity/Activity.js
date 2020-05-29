import React, { Component } from 'react';
import {Button, Card, CardBody, ButtonGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, TabPane,CardHeader,Collapse, TabContent, Row } from 'reactstrap';

class Activity extends Component {
    constructor(props) {
        super(props);

        this.tabPane=this.tabPane.bind(this);
        this.switchTab = this.switchTab.bind(this);
        this.toggleAccordion = this.toggleAccordion.bind(this);

        this.state = {
            activeTab: new Array(1).fill('1'),
            activeIndex:1,
            accordion: [
                [false],
                [false],
                [false],
                [false],
                [false]],
            numbers:new Array(5).fill(0),
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
        console.log(this.state.numbers);
    }

    toggleAccordion(tab,index) {
        const prevState = this.state.accordion;

        for(let i=0;i<prevState[0].length;i++) {
            prevState[tab][i]=false;
        }
        console.log(prevState);
        prevState[tab][index]=true;

        this.setState({
            accordion: prevState,
        });
    }

    newFormation(n) {
        return(
            <Card className="mb-0">
                <CardHeader id="headingOne">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0,n)}>
                        <h5 className="m-0 p-0">Formation {(n+1).toString()}</h5>
                    </Button>
                </CardHeader>
                <Collapse isOpen={this.state.accordion[0][n]}>
                    <CardBody>
                        <Form>
                            <Row className="mb-3">
                                <Col xs="8">
                                    <h6 className="font-lg">Sujet de la formation</h6>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText><i className="icon-user"/></InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" placeholder="Veuillez saisir le sujet de la formation..."/>
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <h6 className="font-lg">Ville</h6>
                                    <Input type="select" name="ccmonth" id="ccmonth">
                                        <option value="1">Ville 1</option>
                                        <option value="2">Ville 2</option>
                                        <option value="3">Ville 3</option>
                                    </Input>
                                </Col>
                            </Row>
                            <hr/>
                            <Row className="mb-3">
                                <Col>
                                    <h6 className="font-lg">Date de début</h6>
                                    <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                </Col>
                                <Col>
                                    <h6 className="font-lg">Date de fin</h6>
                                    <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Collapse>
            </Card>
        )
    }
    createFormations(n) {
        let formation=[];
        let newAccordion=[];
        for(let i=0;i<n;i++)
        {
            formation.push(this.newFormation(i));
            newAccordion.push(false);
        }
        newAccordion[0]=true;
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.accordion[0]=newAccordion;
        return formation;
    }

    newProduction(n) {
        return(
            <Card className="mb-0">
                <CardHeader id="headingOne">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1,n)}>
                        <h5 className="m-0 p-0">Produit/Service {(n+1).toString()}</h5>
                    </Button>
                </CardHeader>
                <Collapse isOpen={this.state.accordion[1][n]}>
                    <CardBody>
                        <Form>
                            <Row className="mb-3">
                                <Col xs="6">
                                    <h6 className="font-lg">Nom du Produit/Service</h6>
                                    <Input type="text" placeholder="Veuillez saisir le nom du Produit/Service..."/>
                                </Col>
                                <Col xs="6">
                                    <h6 className="font-lg">Quantité Vendu/Servie</h6>
                                    <Input type="text" placeholder="Veuillez saisir la Quantité Vendu/Servie..."/>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Collapse>
            </Card>
        )
    }
    createProduction(n) {
        let production=[];
        let newAccordion=[];
        for(let i=0;i<n;i++)
        {
            production.push(this.newProduction(i));
            newAccordion.push(false);
        }
        newAccordion[0]=true;
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.accordion[1]=newAccordion;
        return production;
    }

    newEvenement(n){
        return(
            <Card className="mb-0">
                <CardHeader id="headingOne">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2,n)}>
                        <h5 className="m-0 p-0">Evènement {(n+1).toString()}</h5>
                    </Button>
                </CardHeader>
                <Collapse isOpen={this.state.accordion[2][n]}>
                    <CardBody>
                        <Form>
                            <Row className="mb-3">
                                <Col xs="8">
                                    <h6 className="font-lg">Sujet de l'evènement</h6>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText><i className="icon-user"/></InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" placeholder="Veuillez saisir le sujet de l'evènement..."/>
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <h6 className="font-lg">Ville</h6>
                                    <Input type="select" name="ccmonth" id="ccmonth">
                                        <option value="1">Ville 1</option>
                                        <option value="2">Ville 2</option>
                                        <option value="3">Ville 3</option>
                                    </Input>
                                </Col>
                            </Row>
                            <hr/>
                            <Row className="mb-3">
                                <Col>
                                    <h6 className="font-lg">Date de début</h6>
                                    <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                </Col>
                                <Col>
                                    <h6 className="font-lg">Date de fin</h6>
                                    <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Collapse>
            </Card>
        )
    }
    createEvenement(n){
        let evenement=[];
        let newAccordion=[];
        for(let i=0;i<n;i++)
        {
            evenement.push(this.newEvenement(i));
            newAccordion.push(false);
        }
        newAccordion[0]=true;
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.accordion[2]=newAccordion;
        return evenement;
    }

    newCommunication(n){
        return(
            <Card className="mb-0">
                <CardHeader id="headingOne">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(3,n)}>
                        <h5 className="m-0 p-0">Canal de communication {(n+1).toString()}</h5>
                    </Button>
                </CardHeader>
                <Collapse isOpen={this.state.accordion[3][n]}>
                    <CardBody>
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <h6 className="font-lg">Nom du canal de communication</h6>
                                    <Input type="text" placeholder="Veuillez saisir le nom du canal..."/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="6">
                                    <h6 className="font-lg">Nombre d'utilisation annuel</h6>
                                    <Input type="text" placeholder="Combien de fois vous avez utilisé ce canal..."/>
                                </Col>
                                <Col sx="6">
                                    <h6 className="font-lg">Canal de communication</h6>
                                    <Input type="select" name="ccmonth" id="ccmonth">
                                        <option value="1">Réseaux social</option>
                                        <option value="2">Réseaux social</option>
                                        <option value="3">Réseaux social</option>
                                    </Input>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Collapse>
            </Card>
        )
    }
    createCommunication(n) {
        let communication=[];
        let newAccordion=[];
        for(let i=0;i<n;i++)
        {
            communication.push(this.newCommunication(i));
            newAccordion.push(false);
        }
        newAccordion[0]=true;
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.accordion[3]=newAccordion;
        return communication;
    }

    newAssemble(n){
        return(
            <Card className="mb-0">
                <CardHeader id="headingOne">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(4,n)}>
                        <h5 className="m-0 p-0">Assemblée {(n+1).toString()}</h5>
                    </Button>
                </CardHeader>
                <Collapse isOpen={this.state.accordion[4][n]}>
                    <CardBody>
                        <Form>
                            <Row className="mb-3">
                                <Col xs="8">
                                    <h6 className="font-lg">Motif de l'assemblée</h6>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText><i className="icon-user"/></InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" placeholder="Veuillez saisir le motif de l'assemblée..."/>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <hr/>
                            <Row className="mb-3">
                                <Col>
                                    <h6 className="font-lg">Date de début</h6>
                                    <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                </Col>
                                <Col>
                                    <h6 className="font-lg">Date de fin</h6>
                                    <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Collapse>
            </Card>
        )
    }
    createAssemble(n){
        let assemble=[];
        let newAccordion=[];
        for(let i=0;i<n;i++)
        {
            assemble.push(this.newAssemble(i));
            newAccordion.push(false);
        }
        newAccordion[0]=true;
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.accordion[4]=newAccordion;
        return assemble;
    }

    tabPane() {
        return (
            <>
                <TabPane tabId="1">
                    <Form >
                        <h1>Rapport d'activité</h1>
                        <hr/>
                        <Row className="text-center">
                            <Col xs="3"/>
                            <Col>
                                <h6 className="font-lg">Nombre de formations</h6>
                                <Input className="text-center" type="text" placeholder="0" onChange={(e)=>{
                                    let newNumbers=this.state.numbers;
                                    newNumbers[0]=e.target.value;
                                    this.setState({numbers:newNumbers,})}}/>
                                <hr/>
                                <h6 className="font-lg">Nombre de produit ou service</h6>
                                <Input className="text-center" type="text" placeholder="0" onChange={(e)=>{
                                    let newNumbers=this.state.numbers;
                                    newNumbers[1]=e.target.value;
                                    this.setState({numbers:newNumbers,})}}/>
                                <hr/>
                                <h6 className="font-lg">Nombre d'evènement</h6>
                                <Input className="text-center" type="text" placeholder="0" onChange={(e)=>{
                                    let newNumbers=this.state.numbers;
                                    newNumbers[2]=e.target.value;
                                    this.setState({numbers:newNumbers,})}}/>
                                <hr/>
                                <h6 className="font-lg">Nombre de canaux de communications</h6>
                                <Input className="text-center" type="text" placeholder="0" onChange={(e)=>{
                                    let newNumbers=this.state.numbers;
                                    newNumbers[3]=e.target.value;
                                    this.setState({numbers:newNumbers,})}}/>
                                <hr/>
                                <h6 className="font-lg">Nombre d'assemblées générales</h6>
                                <Input className="text-center" type="text" placeholder="0" onChange={(e)=>{
                                    let newNumbers=this.state.numbers;
                                    newNumbers[4]=e.target.value;
                                    this.setState({numbers:newNumbers,})}}/>
                            </Col>
                            <Col xs="3"/>
                        </Row>
                    </Form>
                </TabPane>

                <TabPane tabId="2">
                    <Form>
                        <h1>Rapport d'activité</h1>
                        <hr/>
                        <CardBody>
                            <div>
                                {this.createFormations(this.state.numbers[0])}
                            </div>
                        </CardBody>
                    </Form>
                </TabPane>

                <TabPane tabId="3">
                    <Form>
                        <h1>Rapport d'activité</h1>
                        <hr/>
                        <CardBody>
                            <div>
                                {this.createProduction(this.state.numbers[1])}
                            </div>
                        </CardBody>
                    </Form>
                </TabPane>

                <TabPane tabId="4">
                    <Form>
                        <h1>Rapport d'activité</h1>
                        <hr/>
                        <CardBody>
                            <div>
                                {this.createEvenement(this.state.numbers[2])}
                            </div>
                        </CardBody>
                    </Form>
                </TabPane>

                <TabPane tabId="5">
                    <Form>
                        <h1>Rapport d'activité</h1>
                        <hr/>
                        <CardBody>
                            <div>
                                {this.createCommunication(this.state.numbers[3])}
                            </div>
                        </CardBody>
                    </Form>
                </TabPane>

                <TabPane tabId="6">
                    <Form>
                        <h1>Rapport d'activité</h1>
                        <hr/>
                        <CardBody>
                            <div>
                                {this.createAssemble(this.state.numbers[4])}
                            </div>
                        </CardBody>
                    </Form>
                </TabPane>

                <TabPane tabId="7">
                    <h1>Rapport d'activité</h1>
                    <hr/>
                    <CardBody>
                        <div className="text-center">
                            <h3>Merci d'avoir rempli votre rapport d'activité pour cette année, pouvez-vous s'il vous plaît confirmer les données que vous avez saisies ?</h3>
                            <br/>
                            <Button color="white" href="#/account" className="px-4 mx-5 btn btn-outline-danger">Annuler</Button>
                            <Button color="white" href="#/account" className="px-3 mx-5 btn btn-outline-success">Comfirmer</Button>
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
                                <Button className="px-4 btn btn-primary">{this.state.activeIndex}/7</Button>
                                <Button className="px-4 btn btn-primary" onClick={() => { this.switchTab(+1); }}>Next</Button>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col>
                            <Card className="mx-5" >
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

export default Activity;
