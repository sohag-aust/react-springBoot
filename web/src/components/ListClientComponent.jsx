import React, { Component } from 'react'
import ClientService from '../services/ClientService'

class ListClientComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clients : []
        }

        this.addClient = this.addClient.bind(this);
        this.editClient = this.editClient.bind(this);
        this.deleteClient = this.deleteClient.bind(this);
        this.viewClient = this.viewClient.bind(this);
    }
    

    componentDidMount() {
        ClientService.getClients().then( (response) => {
            this.setState( {clients: response.data} )
        });
    }

    addClient() {
        this.props.history.push('/client');
    }

    editClient(id) {
        console.log("First Call got client id: " + id);
        this.props.history.push(`/client/${id}`);
    }

    deleteClient(id) {
        console.log("Client deleted with id: " + id);
        ClientService.deleteClient(id).then( (response) => {
            this.setState({clients:this.state.clients.filter(client => client.id !== id)});
        });
    }

    viewClient(id) {
        this.props.history.push(`/view-client/${id}`);
    }


    render = () => (
        <div>
             <h2 className="text-center">Clients List</h2> 

             <div className="row">
                <button className="btn btn-primary" onClick={this.addClient}> Add Client </button>
             </div>

             <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Client Name </th>
                            <th> Client Email </th>
                            <th> Client Country </th>
                            <th> Actions </th> 
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.clients.map(
                                client => 
                                <tr key={client.id}>
                                    <td> {client.clientName} </td>
                                    <td> {client.clientEmail} </td>
                                    <td> {client.country} </td>
                                    <td>
                                        <button onClick={ () => this.editClient(client.id) } className="btn btn-info">
                                            update
                                        </button>
                                   
                                        <button style={{marginLeft:"15px"}} onClick={ () => this.deleteClient(client.id) } className="btn btn-danger">
                                            delete
                                        </button>

                                        <button style={{marginLeft:"15px"}} onClick={ () => this.viewClient(client.id) } className="btn btn-primary">
                                            view
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
             </div>
        </div>
    )
}

export default ListClientComponent