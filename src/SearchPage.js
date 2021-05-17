import React,{Component} from 'react';
import './App.css';

class SearchPage extends Component{

   
    render(){

        const {book} = this.props;
        const tofindBook = 
            this.props.findBook === "" 
                ? book
                : book.filter((nam) =>
                 nam.title.toLowerCase().includes(this.props.findBook.toLowerCase())
                );
        return(
        <div>
            
        <div className ="number-result">{console.log("array",this.props)}
            {tofindBook.length !== book.length &&(
            <div>Now Showing {tofindBook.length} of {book.length}</div>
            )}
        </div>
        <div className = "book-list">

            {tofindBook.map((boc)=>(
                <div>
                <div>{boc.title}</div>
                <div>{boc.author}</div>
                </div>

            ))}

        </div>
        </div>
        )
    }
}

export default SearchPage;