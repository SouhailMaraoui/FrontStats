import React, {Component} from 'react';
import axios from 'axios';
import {Table, Button} from 'reactstrap';

class App extends Component {
  state = {
    cooperatives:[]
  }

  componentWillMount() {
    axios.get('http://costats.ew.r.appspot.com/cooperative/all/')
        .then((response) =>{
      this.setState({
          cooperatives: response.data
      })
    });
  }

  render() {
    let cooperatives = this.state.cooperatives.map((cooperative)=>{
      return (
          <tr key={cooperative.id}>
            <td>{cooperative.id}</td>
            <td>{cooperative.nomCooperative}</td>
            <td>{cooperative.motDePasse}</td>
            <td>
              <Button color="success" size='sm'>Update</Button>
              <Button color="danger" size='sm'>Delete</Button>
            </td>
          </tr>
      )
    });
    return (
        <div className="App container">
          <Table>
            <thead>
            <tr>
              <th>#</th>
              <th>nom Cooperative</th>
              <th>mot De Passe</th>
              <th>Actions</th>
            </tr>
            </thead>

            <tbody>
                {cooperatives}
            </tbody>
          </Table>
        </div>
    );
  }
}

export default App;
