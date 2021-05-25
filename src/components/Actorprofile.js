import React, { Component } from 'react'
import axios from '../API/axios'
import '../style/ActorProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import NavBar from "./NavBar";

export class ActorsProfile extends Component {
  state = {
    movisOfActors: [],
    actorInfo: [],
    actorKnownFor:[]
    
  }
 
componentDidMount =  async()=>{
    const actorUrl = `https://api.themoviedb.org/3/person/${this.props.match.params.id}/movie_credits?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}`;
    const actorInfo = `https://api.themoviedb.org/3/credit/${this.props.match.params.credit_id}?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}`;
    const response = await axios.get(actorUrl);
    const responseInfo = await axios.get(actorInfo);
    console.log(this.props);
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
        <Card className="bg-dark text-white">
          <Card.Img className='movies' src= {`${baseImgUrl}${movie.poster_path}`} alt=''/>
          <Card.Text className='text'>
              {movie.title}
          </Card.Text>
        </Card>
      )
    })
    return (
      <div>
        
        <main>
          <NavBar /> 
          {/* <br/>
          <Container>
            <Row>
              <Col style ={{width : '25%'}}>
                <img className='actorImg' src={`${baseImgUrl}${this.state.actorInfo.profile_path}`} alt=''/>
              </Col>
              <Col style ={{width : '-50%' , marginLeft: '12%'}}>
                <div className='info'>
                  <h2>{this.state.actorInfo.name}</h2>
                  <p>Known For : {this.state.actorKnownFor.title} </p>
                  <p>Job : {this.state.actorInfo.known_for_department} </p> 
                  <p>Popularity : {this.state.actorInfo.popularity}</p>
                </div> 
              </Col>
            </Row>
            </Container> */}
          {/* <Card className="bg-dark text-white actorCard">
            <Card.Img className='actorImg' src={`${baseImgUrl}${this.state.actorInfo.profile_path}`} alt=''/>
            <Card.ImgOverlay>
              <Card.Title>{this.state.actorInfo.name}</Card.Title>
              <Card.Text>
                Known For : {this.state.actorKnownFor.title}
              </Card.Text>
              <Card.Text>Job : {this.state.actorInfo.known_for_department}</Card.Text>
              <Card.Text>Popularity : {this.state.actorInfo.popularity}</Card.Text>
            </Card.ImgOverlay>
          </Card> */}
          {/* <div className = 'body'>
            <img className='Img' src={`${baseImgUrl}${this.state.actorInfo.profile_path}`} alt='' />
            <div className='info'>
              <h2>{this.state.actorInfo.name}</h2>
              <p>Known For : {this.state.actorKnownFor.title} </p>
              <p>Job : {this.state.actorInfo.known_for_department} </p> 
              <p>Popularity : {this.state.actorInfo.popularity}</p>
            </div> */}
          {/* </div> */}
          <div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src={`${baseImgUrl}${this.state.actorInfo.profile_path}`} alt=''/>
      <h1>{this.state.actorInfo.name}</h1>
      <h4>Known For : {this.state.actorKnownFor.title}</h4>
      <span className="minutes">Popularity : {this.state.actorInfo.popularity}</span>
      
    </div>
  </div>
  <div className="blur_back bright_back" style = {{backgroundImage: `url(${baseImgUrl}${this.state.actorInfo.profile_path})`}} ></div>
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