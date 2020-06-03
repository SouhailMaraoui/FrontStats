import React, { Component, } from 'react';
import {
    Table,
    Row,Col,
} from 'reactstrap';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

class Account extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let user=JSON.parse(localStorage.getItem("user"));
    if(user===null){
      this.props.history.push("/login");
    }
    else if(user.role==="admin"){
      this.props.history.push("/dashboard");
    }
  }


  render() {
    return (
        <div>
          <div className="animated fadeIn">
            <h1>Tableau de bord</h1>
            <hr/>
            <div className="mt-3 text-center">
              <h4>Veuillez déposer vos rapports d'activité et financier.</h4>
              <h4><i className="text-danger">Attention,</i> vous ne pourrez pas modifier vos rapports une fois déposés
              </h4>
              <br/>
              <Row>
                <Col xs="2"/>
                <Col xs="8">
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>Année</th>
                      <th>Rapport d'activité</th>
                      <th>Rapport financier</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td><h4 className="mt-1">2020</h4></td>
                      <td>
                        <Button type="button" href="#/account/activity?year=2020" className="btn btn-outline-dark">Soumettre
                          votre rapport d'activité</Button>
                      </td>
                      <td>
                        <Button type="button" href="#/account/financial?year=2020" className="btn btn-outline-dark">Soumettre
                          votre rapport financier</Button>
                      </td>
                    </tr>
                    <tr>
                      <td><h4 className="mt-1">2019</h4></td>
                      <td>
                        <Button type="button" href="#/account/activity?year=2019" className="btn btn-outline-dark">Soumettre
                          votre rapport d'activité</Button>
                      </td>
                      <td>
                        <Button type="button" href="#/account/financial?year=2019" className="btn btn-outline-dark">Soumettre
                          votre rapport financier</Button>
                      </td>
                    </tr>
                    <tr>
                      <td><h4 className="mt-1">2018</h4></td>
                      <td>
                        <Button type="button" href="#/account/activity?year=2018" className="btn btn-outline-dark">Soumettre
                          votre rapport d'activité</Button>
                      </td>
                      <td>
                        <Button type="button" href="#/account/financial?year=2018" className="btn btn-outline-dark">Soumettre
                          votre rapport financier</Button>
                      </td>
                    </tr>
                    <tr>
                      <td><h4 className="mt-1">2017</h4></td>
                      <td>
                        <Button type="button" href="#/account/activity?year=2017" className="btn btn-outline-dark">Soumettre
                          votre rapport d'activité</Button>
                      </td>
                      <td>
                        <Button type="button" href="#/account/financial?year=2017" className="btn btn-outline-dark">Soumettre
                          votre rapport financier</Button>
                      </td>
                    </tr>
                    <tr>
                      <td><h4 className="mt-1">2016</h4></td>
                      <td>
                        <Button type="button" href="#/account/activity?year=2016" className="btn btn-outline-dark">Soumettre
                          votre rapport d'activité</Button>
                      </td>
                      <td>
                        <Button type="button" href="#/account/financial?year=2016" className="btn btn-outline-dark">Soumettre
                          votre rapport financier</Button>
                      </td>
                    </tr>
                    <tr>
                      <td><h4 className="mt-1">2015</h4></td>
                      <td>
                        <Button type="button" href="#/account/activity?year=2015" className="btn btn-outline-dark">Soumettre
                          votre rapport d'activité</Button>
                      </td>
                      <td>
                        <Button type="button" href="#/account/financial?year=2015" className="btn btn-outline-dark">Soumettre
                          votre rapport financier</Button>
                      </td>
                    </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col xs="2"/>
              </Row>
            </div>
          </div>
        </div>
    );
  }
}

export default Account;
