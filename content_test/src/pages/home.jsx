import React from 'react';

import { Link } from 'react-router-dom'
import './home.css';

export default class Home extends React.Component {
   
    render() {
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
                            <h1>Proposed Challenge using ContentFul</h1>
                            <input type="text" placeholder="test"/>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
