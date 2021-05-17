import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchField from './SearchField'
import CurrentlyReading from './CurrentlyReading'
import WannaRead from './WannaRead'
import Read from './Read'


//import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {

    books:[{title:"Hungry Caterpillar",category:"",author:"eric carl",image:"caterpillar"},
    {title:"Enders Game",category:"",author:"Orson Card",image:"Robot"},
    {title:"1776",category:"",author:"David McCullogh",image:"flag"},
    {title:"Horrible Harry ",category:"",author:"Harry Name",image:"Classroom"},
    {title:"The Hobbit",category:"",author:"J.R.R Tolkein",image:"mountain"}]
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    
  }

  render() {
    return (
      <div className="app">
      
         <SearchField book={this.state.books}/>
        
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading/>
                <WannaRead/>
                <Read/>
                
              </div>
            </div>
            <div className="open-search">
             
              
            </div>
          </div>
        
      </div>
    )
  }
}

export default BooksApp
