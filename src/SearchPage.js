import React,{Component} from 'react';
import './App.css';

class SearchPage extends Component{

   
    render(){

        const {book} = this.props;
        const tofindBook = 
            this.props.findBook === "" 
                ? book
                : book.filter((nam) => (
               
                
                nam.title.toLowerCase().includes(this.props.findBook.toLowerCase())

                 ) );
        return(
        <div className="result">
            
         <div className = "book-list">

            {tofindBook.map((boc)=>(
                <div key={boc.id} className="book-list">
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url("${boc.imageLinks.smallThumbnail}")`  }}></div>
                            
                            </div>
                            <div className="book-title">{boc.title}</div>
                            
                            <div className="book-authors">{boc.authors}</div>
                        
                    </div>
                </div>

            ))}
        </div>
       

        <div className ="number-result">{console.log("array",this.props)}
            {tofindBook.length !== book.length &&(
            <div>Now Showing {tofindBook.length} of {book.length}</div>
            )}
        </div>
       
        
        </div>
        )
        
    }
}

export default SearchPage;