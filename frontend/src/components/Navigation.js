import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/"> Notes </Link>
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/"> Notes </Link>
                        </div>
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/newNote"> New Note </Link>
                        </div>
                        <div className="navbar-nav ml-auto">
                            <Link className="nav-link" to="/tasklist"> Manage Global Tasks </Link>
                        </div>
            </nav>
        )
    }
}
