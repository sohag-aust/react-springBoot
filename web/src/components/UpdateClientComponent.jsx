import React, { Component } from 'react'
import ClientService from '../services/ClientService';

class UpdateClientComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            client_name: '',
            client_email: '',
            country: ''
        }

        this.changeClientNameHandler = this.changeClientNameHandler.bind(this);
        this.changeClientEmailHandler = this.changeClientEmailHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.updateClient = this.updateClient.bind(this);
    }

    changeClientNameHandler= (event) => {
        this.setState({client_name: event.target.value});
    }

    changeClientEmailHandler= (event) => {
        this.setState({client_email: event.target.value});
    }

    changeCountryHandler= (event) => {
        this.setState({country: event.target.value});
    }


    componentDidMount() {
        console.log("Second call here : client id: " + this.state.id);
        ClientService.getClientById(this.state.id).then( (res) => {
            let client = res.data;
            console.log("client: " + client.clientName);
            
            this.setState({
                client_name:client.clientName,
                client_email:client.clientEmail,
                country:client.country
            });
        });
    }

    updateClient = (e) => {
         e.preventDefault(); 

        let client = {client_name: this.state.client_name, client_email: this.state.client_email, country: this.state.country};
        console.log('client => ' + JSON.stringify(client));
        console.log('id => ' + JSON.stringify(this.state.id));

        ClientService.updateClient(this.state.id, client).then( res => {
            this.props.history.push('/clients');
        });
    }


    cancel(){
        this.props.history.push('/clients');
    }


    render = () => (
        <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Update Employee </h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Client Name: </label>
                                        <input placeholder="Client Name" name="clientName" className="form-control" 
                                            value={this.state.client_name} onChange={this.changeClientNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Client Email: </label>
                                        <input placeholder="Client Email" name="clientEmail" className="form-control" 
                                            value={this.state.client_email} onChange={this.changeClientEmailHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Client Country: </label>
                                        <input placeholder="Client Country" name="country" className="form-control" 
                                            value={this.state.country} onChange={this.changeCountryHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateClient}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
    )
}

export default UpdateClientComponent