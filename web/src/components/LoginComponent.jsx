import React, { Component } from 'react'
import ClientService from '../services/ClientService';

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        let loggedIn = false;
        this.state = {
            email: '',
            password: '',
            loggedIn
        }

        this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this);
    }


    onChange(event) {
        
        const {value, name} = event.target
        this.setState({
            [name]:value
        })
    }

    login = (e) => {
        e.preventDefault(); // for avoiding auto refresh of the page

        const body = JSON.stringify({email:this.state.email, password:this.state.password});
        console.log(body);

        ClientService.login(body).then( (response)=>{
            
            console.log("JWT Token: " + response.data.jwt);

            this.props.history.push('/clients');
        });
    }

    render = () => (
        <div>
            <h1>Login</h1>
            
            <form onSubmit={this.login}>
                <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange}/>
                <br/>
                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                <br/>
                <button type="submit"  className="btn btn-info">
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default LoginComponent










