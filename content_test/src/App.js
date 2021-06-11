import React from 'react';
import { Link } from 'react-router-dom'
import './App.css'

class App extends React.Component {
  state = { 
    name :'',
    password:'',
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  loginValidation = (e) => {
    const { name, password } = this.state
    if ( name.length < 1 ) {
      alert("O nome de Usuario não pode ser Vazio");
      e.preventDefault();
    }
    if ( password.length < 1) {
      alert("A senha não pode estar Vazia");
      e.preventDefault();
    }else {
      alert(`Bem Vindo ${name}`)
      localStorage.setItem('usuario', name);
    }
  }

  render() {
    return(
  
      <div class="container">
               <div class="box">
                    <h1>Login</h1>
                    <form>
                        <div class="row">
                            <input name="name" type="text" required  onChange={this.handleChange}/>
                            <span>Username</span>
                        </div>
                        <div class="row">
                            <input name="password" type="password" required onChange={this.handleChange}/>
                            <span>Password</span>
                        </div>
                        <div class="row">
                          <Link to="/Home"><input type="submit" value="Submit" onClick={this.loginValidation} /></Link>
                        </div>
                    </form>
               </div>
           </div>

      
    )
  }
}

export default App;
