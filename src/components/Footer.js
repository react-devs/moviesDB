import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../style/footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <h6>MoviesDB</h6>
                <p class="text-justify">MoviesDb <i> THE OPEN MOVIE DATABASE </i> is an online database of information related to films, home videos, series – including cast, personal biographies, plot summaries, trivia, ratings.</p>
              </div>

              <div class="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul class="footer-links">
                  <li><a href="/#">Action</a></li>
                  <li><a href="/#">Comedy</a></li>
                  <li><a href="/#">Horror</a></li>
                  <li><a href="/#">Documentaries</a></li>
                  <li><a href="/#">TV</a></li>
                </ul>
              </div>

              <div class="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul class="footer-links">
                  <li> <Link to="/aboutus" ><a href={() => false}>About Us</a></Link></li>
                  <li> <Link to="/aboutus" ><a href={() => false}>Contact Us</a></Link></li>
                  <li><Link to="/home" ><a href={() => false}>Home</a></Link></li>
                  <li><Link to="/watchlist" ><a href={() => false}>WatchList</a></Link></li>
                  <li><a href="/#">LogOut</a></li>
                </ul>
              </div>
            </div>
            <hr></hr>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                <Link to="/home" ><a href={() => false}> MoviesDB</a></Link>.
               </p>
              </div>

            </div>
          </div>
        </footer>
      </>

    )
  }
}

export default Footer;
