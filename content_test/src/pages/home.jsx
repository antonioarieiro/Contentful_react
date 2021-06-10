import React from 'react';
import { client } from '../client/client'


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
            <div>
                Challenge
            </div>
        )
    }
}