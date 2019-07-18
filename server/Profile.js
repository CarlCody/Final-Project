import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div>
  <div>
    <h1>Cody_FamilyAuctionHouse</h1>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <a className="navbar-brand" href="#">Hello Carl</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </nav></div>
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
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">Home</a><a href>Silver &amp; Gold</a><a href>Collectables &amp; Art</a><a href>Home &amp;
      Garden</a><a href>Saved</a>
  </nav>
  <br />
  <h2><span className="text-warning">Buy</span> It Now Items</h2>
  <br />
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
            <h5>Gold &amp; Silver</h5>
            <p>Great gift or inheritance items for friend or loved one.</p>
          </div>
        </div>
        <div className="carousel-item active">
          <div className="carousel-caption d-none d-md-block">
            <img src="https://justinteeantiques.com/wp-content/uploads/2018/11/massive-sterling-silver-jewellery-box-1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Coins &amp; Collectibles</h5>
              <p>Great gift or inheritance items for friend or loved ones.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://steemitimages.com/DQmPqLUWjqxb8Q4WW992KDxuhHnK5bbDe1fA3U5vpd5U6YS/5.jpeg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Silver &amp; Gold Antiques</h5>
              <p>##.</p>
            </div>
          </div>
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
    </div>
    <h3><span className="text-warning">Items</span> Up For Auction</h3>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://steemitimages.com/DQmUDfNbw86cCPD6e4qftQYp554Hiy3G712D7msMAVp2r6G/9.jpeg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://steemitimages.com/DQmYZqD96LthPwjYBqyyxJnNzGzqVvug2UxbmjmDBTQwYYS/3.jpeg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://moneyinc.com/wp-content/uploads/2018/06/Coins-750x421.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
    <span className="form-inline my-2 my-lg-0">
      <div className="card" style={{width: '60rem'}}>
        <img src="https://justinteeantiques.com/wp-content/uploads/2018/11/massive-sterling-silver-jewellery-box-1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">A pure silver antigue box worthy of collection, with a beautiful design.</p>
        </div>
        {/* </div> */}
        <li className="list-group column">
          {/* <img src="https://historicalantiquesandcoins.com/wp-content/uploads/2017/08/q1-1.jpg"
      class="rounded float-right w-50" alt="...">
  <img src="https://foremansrarecoins.com/wp-content/uploads/2018/05/b847ab9cbb4bc46a569f48a23a13d5bb-150x149.jpg"
      alt="..." class="img-thumbnail w-50">
  <img src="https://justinteeantiques.com/wp-content/uploads/2018/11/massive-sterling-silver-jewellery-box-1.jpg"
      alt="..." class="img-thumbnail w-50"> */}
          {/* <img src="https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F168053%2Fsilver-dollars_4IugrLX.jpg&w=700&op=resize"
      alt="..." class="img-thumbnail w-50"> */}
          {/* <img src="https://foremansrarecoins.com/wp-content/uploads/2018/09/IMG_2382-150x150.jpg"
      class="rounded float-left w-50" alt="..."> */}
          <img src="https://www.umicore.de/storage/regiode/sized/pmm-7-max-600x0.jpg?1531190599" className="rounded float-right w-100" alt="..." />
          <img src="https://www.smarterhobby.com/wp-content/uploads/2017/08/coin-collecting-guide.jpg" className="rounded float-left w-100" alt="..." />
          <img src="https://steemitimages.com/640x0/https://steemitimages.com/DQmRiUu6WLHf6xhtNMovnwHF6t1CFX5bPdN2MLbr9LkQnCx/4.jpeg" className="rounded float-right w-100" alt="..." />
          <img src="https://www.monex.com/images/gold_american_eagles.png" className="rounded float-right w-100" alt="..." />
        </li>
        <div className="card" style={{width: '30-rem'}}>
          <img src="https://historicalantiquesandcoins.com/wp-content/uploads/2017/08/q1-1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">A nice assortment of graded old and antique coins, worthy of collection.</p>
          </div>
          {/* Footer */}
          <footer className="page-footer font-small blue pt-4">
            {/* Footer Links */}
            <div className="container-fluid text-center text-md-left">
              {/* Grid row */}
              <div className="row">
                {/* Grid column */}
                <div className="col-md-6 mt-md-0 mt-3">
                  {/* Content */}
                  <h5 className="text-uppercase">Footer Content</h5>
                  <p>Here you can use rows and columns to organize your footer content.</p>
                </div>
                {/* Grid column */}
                <hr className="clearfix w-100 d-md-none pb-3" />
                {/* Grid column */}
                <div className="col-md-3 mb-md-0 mb-3">
                  {/* Links */}
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">About Us</a>
                    </li>
                    <li>
                      <a href="#!">News Letter</a>
                    </li>
                    <li>
                      <a href="#!">Subscriptions</a>
                    </li>
                    <li>
                      <a href="#!">Help &amp; Contact</a>
                    </li>
                  </ul>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 mb-md-0 mb-3">
                  {/* Links */}
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">Seller Center</a>
                    </li>
                    <li>
                      <a href="#!">Resolution Center</a>
                    </li>
                    <li>
                      <a href="#!">Policies</a>
                    </li>
                    <li>
                      <a href="#!">Site Map</a>
                    </li>
                  </ul>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
            {/* Footer Links */}
            {/* Copyright */}
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
              <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
            </div>
            {/* Copyright */}
          </footer>
        </div>
      </div></span></div></div>

        )
    }
}
