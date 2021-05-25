import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import NavBar from '../components/NavBar'
import '../style/aboutUs.css'

class AboutUs extends Component {
  render() {

    const card = () => {
      return (
        <>

          <div className="card-container">
            {/* <span className="pro">PRO</span> */}
            <img className="round" src={`https://randomuser.me/api/portraits/women/79.jpg`} alt="user" />
            <h3>Ricky Park</h3>
            <h6>New York</h6>
            <p>User interface designer and <br /> front-end developer</p>
            <div className="buttons">
              <button className="primary">
                GitHub
		            </button>
              <button className="primary ghost">
                Portfolio
	            	</button>
            </div>
            <div className="skills">
              <h6>Skills</h6>
              <ul>
                <li>UI / UX</li>
                <li>Front End Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
            </div>
          </div>



        </>)
    }
    return (<>
      <NavBar />
      <div className="all-cards">
        {card()}
        {card()}
        {card()}
        {card()}
        {card()}

      </div>

    </>
    );
  }
}

export default withAuth0(AboutUs);
