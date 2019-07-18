import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class  extends Component {
    render() {
        return (
          <div>
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Home</a>
  </nav>
  <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-bottom">
    <a className="navbar-brand" href="#">Hello Carl</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <br />
  <h2><span className="text-warning">Buy</span> It Now Items</h2>
  <div className="bd-example">
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
        <li data-target="#carouselExampleCaptions" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://steemitimages.com/DQmPqLUWjqxb8Q4WW992KDxuhHnK5bbDe1fA3U5vpd5U6YS/5.jpeg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Gold &amp; SIlver</h5>
            <p>Great gift or inheritance items for friend or loved one.</p>
            <div className="carousel-item active">
              <div className="carousel-caption d-none d-md-block">
                <img src="https://justinteeantiques.com/wp-content/uploads/2018/11/massive-sterling-silver-jewellery-box-1.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Coins &amp; Collectibles</h5>
                  <p>Great gift or inheritance items for friend or loved ones.</p>
                </div>
                <div className="carousel-item">
                  <img src="https://steemitimages.com/DQmPqLUWjqxb8Q4WW992KDxuhHnK5bbDe1fA3U5vpd5U6YS/5.jpeg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Fashion &amp; Apparel</h5>
                    <p>For the person that likes to be different from everyone else.</p>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                <h3><span className="text-warning">Items</span> Up For Auction</h3>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://steemitimages.com/DQmUDfNbw86cCPD6e4qftQYp554Hiy3G712D7msMAVp2r6G/9.jpeg" className="d-block w-100" alt="..." />
                      <div className="carousel-item">
                        <img src="https://steemitimages.com/DQmYZqD96LthPwjYBqyyxJnNzGzqVvug2UxbmjmDBTQwYYS/3.jpeg" className="d-block w-100" alt="..." />
                        <div className="carousel-item">
                          <img src="..." className="d-block w-100" alt="..." />
                          <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                          </a>
                          <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                        <li className="list-group-horizontal">
                          {/* <img src="https://historicalantiquesandcoins.com/wp-content/uploads/2017/08/q1-1.jpg"
      class="rounded float-right w-50" alt="...">
  <img src="https://foremansrarecoins.com/wp-content/uploads/2018/05/b847ab9cbb4bc46a569f48a23a13d5bb-150x149.jpg"
      alt="..." class="img-thumbnail w-50">
  <img src="https://justinteeantiques.com/wp-content/uploads/2018/11/massive-sterling-silver-jewellery-box-1.jpg"
      alt="..." class="img-thumbnail w-50"> */}
                          {/* <img src="https://foremansrarecoins.com/wp-content/uploads/2018/05/b847ab9cbb4bc46a569f48a23a13d5bb-150x149.jpg"
      alt="..." class="img-thumbnail w-50"> */}
                          <img src="https://foremansrarecoins.com/wp-content/uploads/2018/09/IMG_2382-150x150.jpg" className="rounded float-left w-50" alt="..." />
                          <img src="https://www.umicore.de/storage/regiode/sized/pmm-7-max-600x0.jpg?1531190599" className="rounded float-right w-50" alt="..." />
                          <img src="https://www.smarterhobby.com/wp-content/uploads/2017/08/coin-collecting-guide.jpg" className="rounded float-left w-50" alt="..." />
                          <img src="https://steemitimages.com/640x0/https://steemitimages.com/DQmRiUu6WLHf6xhtNMovnwHF6t1CFX5bPdN2MLbr9LkQnCx/4.jpeg" className="rounded float-right w-50" alt="..." />
                          <img src="https://historicalantiquesandcoins.com/wp-content/uploads/2017/08/q1-1.jpg" className="rounded float-right w-50" alt="..." />
                        </li>
                        <span className="fixed-top">
                          <nav className="navbar navbar-light bg-dark">
                            <a className="navbar-brand" href="#">Home</a><a href>Saved</a><a href>Collectables &amp; Art</a><a href>Home &amp;
                              Garden</a><a href>Silver &amp; Gold</a>
                          </nav>
                        </span>
                        // <div classname="container">
                          //     <h1>Buyer Home Page js</h1>
                          //     <p>Welcome to cody and jbs auction house</p>
                          //     <link to="/about" />Go to About Page
                          // </div>
                      </div>
                    </div></div></div></div></div></div></div></div></div></div></div>
 
            
        )
    }
}
