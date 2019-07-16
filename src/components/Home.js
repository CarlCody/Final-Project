import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class  extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Home</a>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-bottom">
        <a class="navbar-brand" href="#">Hello Carl</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>

<br>
<h2><span class="text-warning">Buy</span> It Now Items</h2>

<div class="bd-example"/>
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel"/>
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner"/>
            <div class="carousel-item active"/>
                <img src="https://steemitimages.com/DQmPqLUWjqxb8Q4WW992KDxuhHnK5bbDe1fA3U5vpd5U6YS/5.jpeg"
                    class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block"/>
                    <h5>Gold & SIlver</h5>
                    <p>Great gift or inheritance items for friend or loved one.</p>
            
            
            <div class="carousel-item active"/>
                <div class="carousel-caption d-none d-md-block">
                    <img src="https://justinteeantiques.com/wp-content/uploads/2018/11/massive-sterling-silver-jewellery-box-1.jpg"
                        class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Coins & Collectibles</h5>
                        <p>Great gift or inheritance items for friend or loved ones.</p>
                    </div>
                
                <div class="carousel-item">
                    <img src="https://steemitimages.com/DQmPqLUWjqxb8Q4WW992KDxuhHnK5bbDe1fA3U5vpd5U6YS/5.jpeg"
                        class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Fashion & Apparel</h5>
                        <p>For the person that likes to be different from everyone else.</p>
                    </div>
                
            
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next"/>
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    
    <h3><span class="text-warning">Items</span> Up For Auction</h3>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel"/>
        <div class="carousel-inner"/>
            <div class="carousel-item active"/>
                <img src="https://steemitimages.com/DQmUDfNbw86cCPD6e4qftQYp554Hiy3G712D7msMAVp2r6G/9.jpeg"
                    class="d-block w-100" alt="...">
            
            <div class="carousel-item"/>
                <img src="https://steemitimages.com/DQmYZqD96LthPwjYBqyyxJnNzGzqVvug2UxbmjmDBTQwYYS/3.jpeg"
                    class="d-block w-100" alt="...">
            
            <div class="carousel-item"/>
                <img src="..." class="d-block w-100" alt="...">
            
        
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <li class="list-group-horizontal">
        <!-- <img src="https://historicalantiquesandcoins.com/wp-content/uploads/2017/08/q1-1.jpg"
            class="rounded float-right w-50" alt="...">
        <img src="https://foremansrarecoins.com/wp-content/uploads/2018/05/b847ab9cbb4bc46a569f48a23a13d5bb-150x149.jpg"
            alt="..." class="img-thumbnail w-50">
        <img src="https://justinteeantiques.com/wp-content/uploads/2018/11/massive-sterling-silver-jewellery-box-1.jpg"
            alt="..." class="img-thumbnail w-50"> -->
        <!-- <img src="https://foremansrarecoins.com/wp-content/uploads/2018/05/b847ab9cbb4bc46a569f48a23a13d5bb-150x149.jpg"
            alt="..." class="img-thumbnail w-50"> -->
        <img src="https://foremansrarecoins.com/wp-content/uploads/2018/09/IMG_2382-150x150.jpg"
            class="rounded float-left w-50" alt="...">
        <img src="https://www.umicore.de/storage/regiode/sized/pmm-7-max-600x0.jpg?1531190599"
            class="rounded float-right w-50" alt="...">
        <img src="https://www.smarterhobby.com/wp-content/uploads/2017/08/coin-collecting-guide.jpg"
            class="rounded float-left w-50" alt="...">
        <img src="https://steemitimages.com/640x0/https://steemitimages.com/DQmRiUu6WLHf6xhtNMovnwHF6t1CFX5bPdN2MLbr9LkQnCx/4.jpeg"
            class="rounded float-right w-50" alt="...">
        <img src="https://historicalantiquesandcoins.com/wp-content/uploads/2017/08/q1-1.jpg"
            class="rounded float-right w-50" alt="...">
    </li>

    <span class="fixed-top">
        <nav class="navbar navbar-light bg-dark">
            <a class="navbar-brand" href="#">Home</a><a href="">Saved</a><a href="">Collectables & Art</a><a
                href="">Home &
                Garden</a><a href="">Silver & Gold</a>
        </nav>
    </span>
            // <div className="container">
            //     <h1>Buyer Home Page js</h1>
            //     <p>Welcome to cody and jbs auction house</p>
            //     <Link to='/about'>Go to About Page</Link>
            // </div>
            </div>  
            
        )
    }
}
