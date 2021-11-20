import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

class App extends React.Component{
  // state = {
  //   email: "",
  //   password: "",
  //   emailError: "",
  //   passwordError: "",
  //   detail: "",
  //   age: ""
  // }
  // changeData = (e) => {
  //   let val = e.target.name; //Getting the name of the input
  //   let myValue = e.target.value //Getting the value of the input
  //   this.setState({
  //     [val]: myValue
  //   })
  // }

  // validate(){
  //   if(!this.state.email){
  //     this.setState({
  //       emailError: "Email Required"
  //     })
  //   }else if(!this.state.password){
  //       this.setState({
  //         passwordError: "Password Required"
  //       })
  //   }else{
  //     return true
  //   }
  // }

  // formSubmit = (e) =>{
  //   e.preventDefault();
  //   if(this.validate()){
  //     alert("Form Submitted");
  //   }
  // }

  // render(){
  //   return(
  //     <div className="App">
  //       <h1> {this.state.email}</h1>
  //       <h1> {this.state.password}</h1>
  //       <div>
  //       <h1>Login</h1>
  //         <form onSubmit={this.formSubmit}>
  //           <div className='form-group' style={{marginLeft: 200}}>
  //             <label>Email</label> <br></br>
  //             <input type='email' name='username' onChange={(event) => {this.setState({email: event.target.value})}}></input> <br></br>
  //             <strong style={{color: 'red'}}> {this.state.emailError} </strong> <br></br>

  //             <label>Password</label> <br></br>
  //             <input type='password' name='phonenumber' onChange={(event) => {this.setState({password: event.target.value})}}></input> <br></br>
  //             <strong style={{color: 'red'}}> {this.state.passwordError} </strong> <br></br>

  //             <label>Age</label> <br></br>
  //             <select onChange={(event) => {this.setState({age: event.target.value})}}>
  //               <option value="15 - 20">15 - 20</option>
  //               <option value="21 - 30">21 - 30</option>
  //               <option value="31 - 40">31 - 40</option>
  //             </select>
  //             <h6> {this.state.age} </h6>

  //             <label>Details</label> <br></br>
  //             <textarea defaultValue="Write on here" onChange={(event) => {this.setState({detail: event.target.value})}}></textarea>
  //             <h6>{this.state.detail}</h6>

  //             <button type='submit'>Submit</button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   )
  // }

  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Contact Us</Nav.Link>
          <Nav.Link href="#pricing">About Us</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
          <Nav.Link href="#pricing">Profile</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}

export default App;
