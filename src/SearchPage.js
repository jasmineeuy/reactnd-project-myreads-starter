import React,{Component} from 'react';
import './App.css';

class SearchPage extends Component{

    
    render(){
        return(
        <div><button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button></div>
        )
    }
}

export default SearchPage;