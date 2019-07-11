import React, { Component } from 'react'

export default class Subscribe extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark fixed-top">
        <span class="navbar-brand mb-0 h1">Subscription</span>
        <a href="profile.html"><i class="fas fa-check text-warning"></i></a> </nav>
    
    <form>
        <div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <div class="form-group">
                            <span class="border border-dark">
                            <label for="firstName">First Name</label>
                            <input placeholder="Enter your First Name..." class="form-control border-dark" type="text"
                                name="username" id="username"/>
                        </div>
                    </h2>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                    data-parent="#accordionExample">
                    <div class="card-body">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                            <label class="custom-control-label" for="customCheck1">Check this if buyer....</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck2"/>
                            <label class="custom-control-label" for="customCheck2">Check this if seller....</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                        <div class="form-group">
                             <span class="border border-dark">
                            <label for="firstName">Last Name</label>
                            <input placeholder="Enter your Last Name..." class="form-control border-dark" type="text"
                                name="username" id="username"/>
                        </div>
                    </h2>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                        <div class="form-group">
                             <span class="border border-dark"> 
                            <label for="firstName">Email</label>
                            <input placeholder="Enter your Email here..." class="form-control border-dark" type="text"
                                name="username" id="username"/>
                        </div>
                    </h2>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                    </h2>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Location
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu">
                          <button class="dropdown-item" type="button">Action</button>
                          <button class="dropdown-item" type="button">Another action</button>
                          <button class="dropdown-item" type="button">Something else here</button>
                        </div>
                      </div>
                </div>
            </div>
            <footer>
                <nav class="navbar navbar-dark bg-dark fixed-bottom">
                    <span class="navbar-brand mb-0 h1"></span>
                    <a href="profile.html"><i class="fas fa-users text-warning"></i></a> </nav>

            </footer>


    </form>
            </div>
        )
    }
}
