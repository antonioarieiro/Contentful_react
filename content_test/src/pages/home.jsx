import React from 'react';

import { Link } from 'react-router-dom'
import './home.css';

export default class Home extends React.Component {
   
    render() {
        return (
            <div >
                <header>
                       <nav className="navigation">
                           <Link to="/"><p>Home</p></Link>
                           <Link to="/Lojas"><p>Lojas</p></Link>
                           <div className="log">
                            <p>Login</p>
                            <p>Cadastre-se</p>
                           </div>
                       </nav>
                </header>
                <main>
                    <div className="wrapper">
                    </div>
                </main>
            </div>
        )
    }
}
