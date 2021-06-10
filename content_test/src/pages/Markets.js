import React from 'react';
import { client } from '../client/client';
import Posts from '../components/Posts.js';
import { Link } from 'react-router-dom'
import './home.css';

export default class Home extends React.Component {
    state = { 
        articles: [],
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

    render() {
        return (
            <div >
                <header>
                       <nav className="navigation">
                           <Link to="/"><p>Home</p></Link>
                           <Link to="/"><p>Lojas</p></Link>
                           <div className="log">
                            <p>Login</p>
                            <p>Cadastre-se</p>
                           </div>
                       </nav>
                </header>
                <main>
                    <div className="wrapper">
                        <Posts posts={this.state.articles}/>
                    </div>
                </main>
            </div>
        )
    }
}
