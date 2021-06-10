import React from 'react';
import { Link } from 'react-router-dom'
import './App.css'

class App extends React.Component {
  state = { 
    name :'',
  }

  handleChange = (e) => {
    this.setState({name: e.target.value});
  }

  loginValidation = (e) => {
    const { name } = this.state
    if ( name.length < 4 ) {
      alert("O nome de Usuario deve ter mais de 5 Caracteres");
      e.preventDefault();
    }else {
      alert(`Bem Vindo ${name}`)
      localStorage.setItem('usuario', name);
    }
  }

  render() {
    const { name } = this.state
    return(
  
      <div class="container">
        <div class="box">
          <h1>Sign In</h1>
          <div class="row">
            <input type="text" value={name}  placeholder="Username" required onChange={ this.handleChange }/>
          </div>
          <div class="row">
            <input type="password" placeholder="Password" required />
          </div>
          <Link  to="/Home" onClick={this.loginValidation}>Login</Link>
          <Link to="/"><p>Cadastre-se</p></Link>
        </div>
      </div>
    )
  }
}

export default App;
