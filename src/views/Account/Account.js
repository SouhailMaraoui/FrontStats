import React, { Component, lazy, Suspense } from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
} from 'reactstrap';
import thumbnail from "../../assets/img/Home/Thumbnail.png";
import {Button} from "reactstrap";

class Account extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <h1>Tableau de bord</h1>
        <hr/>
          <div className="mt-5 text-center">
            <h4>Veuillez déposer vos rapports d'activité et financier.</h4>
            <h4><i class="text-danger">Attention,</i> vous ne pourrez pas modifier vos rapports une fois déposés</h4>
            <br/>
            <Button type="button" href="#/account/activity" className="btn btn-outline-dark btn-lg mt-5 mx-2">Soumettre votre rapport d'activité</Button>
            <Button type="button" href="#/account/financial" className="btn btn-outline-dark btn-lg mt-5 mx-2">Soumettre votre rapport financier</Button>
          </div>
      </div>
    );
  }
}

export default Account;
