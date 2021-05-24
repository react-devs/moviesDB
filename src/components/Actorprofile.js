import React, { Component } from 'react'
import axios from '../API/axios'
import '../style/ActorProfile.css';

export class ActorsProfile extends Component {
  state = {
    movisOfActors: [],
    actorInfo: [],
    actorKnownFor:[]
    
  }
 
componentDidMount =  async()=>{
    const actorUrl = `https://api.themoviedb.org/3/person/${this.props.match.params.id}/movie_credits?api_key=327835964ac0c735575e3185ae623d2b`
    
    const actorInfo = `https://api.themoviedb.org/3/credit/${this.props.match.params.credit_id}?api_key=327835964ac0c735575e3185ae623d2b`
    const response = await axios.get(actorUrl)
    const responseInfo = await axios.get(actorInfo)
    console.log(this.props)
    // https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_cast=${this.props.credit_id}
    // https://api.themoviedb.org/3/person/${this.props.credit_id}/movie_credits?api_key=327835964ac0c735575e3185ae623d2b
    console.log(responseInfo);
    this.setState({
      movisOfActors:response.data.cast,
      actorInfo:responseInfo.data.person,
      actorKnownFor:responseInfo.data.person.known_for[0]
    })
    
}
  render() {
    const baseImgUrl = "https://image.tmdb.org/t/p/original";
    const moviesrelated = this.state.movisOfActors.map((movie) => {
      return(
        <img className='movies' src= {`${baseImgUrl}${movie.poster_path}`} alt=''/>
      )
    })
    return (
      <div>
        <header>

        </header>
        <main>
          <div className = 'body'>
            <img className='Img' src={`${baseImgUrl}${this.state.actorInfo.profile_path}`} alt='' />
            <div className='info'>
              <h2>{this.state.actorInfo.name}</h2>
              <p>Known For : {this.state.actorKnownFor.title} </p>
              <p>Job : {this.state.actorInfo.known_for_department} </p> 
              <p>Popularity : {this.state.actorInfo.popularity}</p>
            </div>
          </div>
          <div className='moviesOfActor'>
            <h1>Movies of the actor</h1>

          </div>
          <div className='moviesOfActor'>
            {moviesrelated}
          </div>
        </main>
        <footer>

        </footer>
      </div>
    )
  }
}

export default ActorsProfile