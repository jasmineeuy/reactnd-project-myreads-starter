import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchField from './SearchField'
import CurrentlyReading from './CurrentlyReading'


import {Route} from "react-router-dom"



import {Link} from "react-router-dom"

/* 
  -Read-Already Completed 
  -Current-Currently Reading
  -Want-Want to read-
*/
const typeCategory =[{categoryShelf:"Read"},{categoryShelf:"Current"},{categoryShelf:"Want"}]
class BooksApp extends React.Component {
  state = {

    books:[{title:"Hungry Caterpillar",category:"current",author:"eric carl",image:"caterpillar"},
    {title:"Enders Game",category:"current",author:"Orson Card",image:"Robot"},
    {title:"1776",category:"null",author:"David McCullogh",image:"flag"},
    {title:"Horrible Harry ",category:"null",author:"Harry Name",image:"Classroom"},
    {title:"The Hobbit",category:"null",author:"J.R.R Tolkein",image:"mountain"}],
    
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    
  }

  updateCategory = (newCategory) => {


    const newArray =[];

    this.state.books.forEach(element => newArray.push(element));

    console.log("app array",newArray);
   /* this.setState((currentCategory)=>({

      books: currentCategory.books.forEach((ctg) => {
        

      })

    }))*/
  }

  render() {
    return (
      <div className="app">
       
        
        
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
            <Route exact path="/" render={()=>(
              <div className="list-books-content">
              <div>
                
              <CurrentlyReading book={this.state.books}/>
               { /*<CurrentlyReading/>
                <WannaRead/>
                <Read/>*/
               }
              </div>
            </div>
            )}/>
            {/*<Route exact path="/search" render={()=>( <SearchField book={this.state.books}/>)}/>*/}
            
            <div className="open-search">
             
            <Link to ="./search">
              <button >Add a book</button>
            </Link>
            </div>
          </div>
         
         {/* <BookOption book={this.state.books} newCategory={this.updateCategory}/>*/}
      </div>
    )
  }
}

export default BooksApp
