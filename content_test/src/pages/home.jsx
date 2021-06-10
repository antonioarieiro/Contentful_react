import React from 'react';
import {client } from '../client/client'
import { Link } from 'react-router-dom'
import './home.css';

export default class Home extends React.Component {
    
    state = { 
        articles: [],
        inputTextValue:''
    }
    componentDidMount () {
        client
        .getEntries()
        .then((response) => {
            this.setState({
                articles: response.items
            })
            console.log(response.items)
        })
        .catch(err => console.log(err));
    }

    handleChange = (e) => {
        this.setState({inputTextValue: e.target.value});
    }

    render() {
        const { articles, inputTextValue } = this.state
        return (
            <div>
                 <div className="wrapper">
                        <header>
                        <nav className="navigation">
                            <Link to="/"><p>Home</p></Link>
                            <Link to="/Lojas"><p>Lojas</p></Link>
                            <div className="log">
                            <Link to="/"><p>Login</p></Link>
                            <Link to="/"><p>Cadastre-se</p></Link>
                            </div>
                        </nav>
                        </header>
                    </div>
                <main>
                    <div className="section">
                        <div className="info">
                            <h1>Bem Vindo: {localStorage.getItem('usuario')}</h1>
                            <br/>
                            <h1>Proposed Challenge using ContentFul</h1>
                            <br/>
                            <p>Escreva o Nome da Loja para filtra-lo</p>
                            <input type="text" placeholder="Pesquise os Nomes das Lojas Aqui" onChange={this.handleChange}/>
                                {
                                    articles
                                    .filter((name) => name.fields.name.includes(inputTextValue))
                                    .map((name) => <h1>Lojas : {name.fields.name}</h1>)
                                }
                          
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
