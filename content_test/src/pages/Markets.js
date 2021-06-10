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
                           <Link to="/"><p>Login</p></Link>
                            <Link to="/"><p>Cadastre-se</p></Link>
                           </div>
                       </nav>
                </header>
                <main>
                    <div>
                        <Posts posts={this.state.articles}/>
                    </div>
                </main>
            </div>
        )
    }
}
