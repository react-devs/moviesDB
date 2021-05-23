import React, { Component } from 'react'
// import axios from '../API/axios'
import '../style/ActorProfile.css';

export class ActorsProfile extends Component {


// componentDidMount =  async()=>{
//     const {actorUrl} = this.props

//     const response = await axios.get(actorUrl)

//     // https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_cast=${this.props.credit_id}
//     // https://api.themoviedb.org/3/person/${this.props.credit_id}/movie_credits?api_key=327835964ac0c735575e3185ae623d2b

//     this.setState({
//       movies:response.data.results
//     })
    
// }
  render() {
    return (
      <div>
        <header>

        </header>
        <main>
          <div className = 'body'>
            <img className='Img' src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F968210608%2F960x0.jpg%3Ffit%3Dscale' alt='' />
            <div className='info'>
              <h2>name of the actor</h2>
              <p>Overveiw</p>
              <p>Date Of Birth: </p>
              <p>Country</p>
            </div>
          </div>
          <div className='moviesOfActor'>
            <h1>Movies of the actor</h1>
            <img className='movies' src='https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg' alt=''/>
            <img className='movies' src='https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg' alt=''/>
            <img className='movies' src='https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg' alt=''/>
          </div>

        </main>
        <footer>

        </footer>
      </div>
    )
  }
}

export default ActorsProfile