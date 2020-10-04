import React, { Component } from 'react'

class HeaderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


    render = () => (
        <div>
             <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="https://www.google.com" className="navbar-brand">
                            Client Management App
                        </a>
                    </div>
                </nav>
             </header>
        </div>
    )
}

export default HeaderComponent