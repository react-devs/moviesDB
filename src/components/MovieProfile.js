import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";

import NavBar from './NavBar'



class MovieProfile extends Component {

    componentDidMount(){
        // get the data here
    }



    render() {
        
        return (
            <>
                <NavBar/>
                <h1>movie id ={this.props.match.params.id}</h1>
            </>
        )
    }
}

export default withAuth0(MovieProfile) 