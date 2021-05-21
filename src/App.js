import React, { Component } from 'react'
import MoviesContainer from './components/MoviesContainer'
import requests from './API/requests'

class App extends Component {
  render() {

    console.log(requests.fetchTrending)
    return (
      <div>
        <MoviesContainer fetchUrl={requests.fetchTrending} />
      </div>
    )
  }
}


export default App;
