import React,{Component, useReducer} from 'react';
import BooksApp from './App';
import './App.css';
import BookOption from './BookOption';

class CurrentlyReading extends Component{

    render(){

      {console.log("props",this.props)}
        return(

        <div><div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        
        <div className="bookshelf-books">
         
          <ol className="books-grid">



           

            {this.props.book.map(book =>(


              
            
                (book.category === "current") ?
                <div>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        {book.title}
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
                        <BookOption/>
                      
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.author}</div> 
                    
                    </div>
                  </li>

                </div> :
                
                <div>{console.log("no")}</div>
              
           ) )}
          
          
         
          </ol>
          
        </div></div></div>

        )
    }
}

export default CurrentlyReading;