import React, { Component } from 'react'

class FooterComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


    render = () => (
        <div>
             <footer className="footer">
                <span className="text-muted">
                    All rights reserved &copy;2020
                </span>
             </footer>
        </div>
    )
}

export default FooterComponent