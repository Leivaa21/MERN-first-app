import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">Notes</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" to="/">Notes<span className="sr-only">(current)</span></Link>
                            <Link className="nav-link" to="/create">New Note</Link>
                        </div>
                        <div className="navbar-nav ml-auto">
                            <Link className="nav-link" to="/user">Register</Link>
                        </div>
                    </div>
            </nav>
        )
    }
}
