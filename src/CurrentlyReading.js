import React,{Component} from 'react';
//import BooksApp from './App';
import './App.css';
import BookOption from './BookOption';
import update from 'immutability-helper';

class CurrentlyReading extends Component{


  state={
    newArray:[],
    value:"",

  }


  updatedArray = (newdata,newtitle) => {

   
    this.setState({value:newdata});
   // console.log("newdata currently file"+ newdata);
   console.log("new"+newdata);
   console.log("title"+newtitle);
  
   const newArr = [];
   const newUpdate=this.props.book.slice();
   const update0 =[];
    //{console.log("newOption",newOption)}
    //{console.log("name",name)}
  
    this.props.book.forEach((element)=>{
     
     //{category:{$apply:function(x){return x+"no"}}}
      (element.title === newtitle) ? (update0.push( update(newUpdate,{0:{category:{$splice:["newwor"]}}}))) : newArr.push(element)

       }
       
    )
   // return newArr
 //console.log(newArr)
 
 console.log(update0)
  
  }




    render(){

      {/*console.log("props",this.props)
        console.log("value",this.state.value)*/}
      

        return(

        <div><div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.category.categoryShelf}</h2>
        
        <div className="bookshelf-books">
         
          <ol className="books-grid">


           

            {this.props.book.map(book =>(


              
            
                (book.shelf === this.props.category.categoryShelf) ?
                <div key={book.id}>
                  <li>
                    <div className="book">
                      <div className="book-top">
                       
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url("${book.imageLinks.smallThumbnail}")`  }}></div>
                        <BookOption updateCateg={this.updatedArray} title={book.title} value0={this.state.value}/>
                        
      
                      </div>
                      <div className="book-title">{book.title}</div>
                      {/*<button onClick={console.log(this.updatedArray())}>click</button>*/}
                      <div className="book-authors">{book.authors}</div> 
                    
                    </div>
                  </li>

                </div> :
                
                <div key={book.title}>{/*console.log("no")*/}</div>
              
           ) )}
          
          
         
          </ol>
          
        </div></div></div>

        )
    }
}

export default CurrentlyReading;