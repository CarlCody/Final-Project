import React, { Component } from 'react'



export default class Login extends React.Component {

    state = {
        username: "",
        password: "",
        email:"",
        showAlert: false
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            showAlert: false
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        const user = {
            username,
            password,

        }
        this.login(user);
    }

    login = async user => {
        try {
            const res = await axios.post('/api/login', user);
            this.props.history.push(`/user/${res.data._id}`)
        } catch {
            this.setState({
                showAlert: true
            })
        }
        //connecting to user.server.js in (serverside)
        //Pass in username and password as parameter to serverside.`
        // const res = await axios.post('/api/login', user);
        // if(res.data){
        //     this.props.history.push(`/user/${res.data._id}`)
        // }else {
        //     // alert("Your username and password doesn't match our records");
        //     this.setState({
        //         showAlert: true
        //     })
        // }
    }

export default class Subscribe extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark fixed-top">
        <span className="navbar-brand mb-0 h1">Subscription</span>
        <a to="profile.html"><i className="fas fa-check text-warning"></i></a> </nav>
    
    <form>
        <div className="accordion" id="accordionExample">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <div className="form-group">
                            <span className="border border-dark">
                            <label htmlFor="firstName">First Name</label>
                            <input placeholder="Enter your First Name..." className="form-control border-dark" type="text"
                                name="username" id="username"/>
                        </div>
                    </h2>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                    data-parent="#accordionExample">
                    <div className="card-body">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                            <label className="custom-control-label" htmlFor="customCheck1">Check this if buyer....</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                            <label className="custom-control-label" htmlFor="customCheck2">Check this if seller....</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                        <div className="form-group">
                             <span className="border border-dark">
                            <label htmlFor="firstName">Last Name</label>
                            <input placeholder="Enter your Last Name..." className="form-control border-dark" type="text"
                                name="username" id="username"/>
                        </div>
                    </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
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
            <div className="card">
                <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                        <div className="form-group">
                             <span className="border border-dark"> 
                            <label htmlFor="firstName">Email</label>
                            <input placeholder="Enter your Email here..." className="form-control border-dark" type="text"
                                name="username" id="username"/>
                        </div>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                    </h2>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Location
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                          <button className="dropdown-item" type="button">Action</button>
                          <button className="dropdown-item" type="button">Another action</button>
                          <button className="dropdown-item" type="button">Something else here</button>
                        </div>
                      </div>
                </div>
            </div>
            <footer>
                <nav className="navbar navbar-dark bg-dark fixed-bottom">
                    <span className="navbar-brand mb-0 h1"></span>
                    <Link to="profile.html"><i className="fas fa-users text-warning"></i></Link> </nav>

            </footer>


    </form>
            </div>
        )
    }
}
