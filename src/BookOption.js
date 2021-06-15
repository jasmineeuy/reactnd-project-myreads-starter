import React,{Component} from 'react';
import './App.css';

class BookOption extends Component{

  state={

      value:"",
        
    }
   

    onChange = (event) => {

      this.setState({value:event.target.value},()=>{
        this.props.updateCateg(this.state.value,this.props.title)

      })
     
      

    }

    onSubmit= (event) =>{
    alert("The info has changed in the form" + this.props.title + ""+this.state.value)
    
      event.preventDefault();
      
    }

   



    render(){
      //console.log("onchange " +this.state.value +" "+this.props.title);
       //console.log("option props",this.props)
      // console.log("newvalue from CR",this.props.value0)
        return(
       
         <form onSubmit={this.onSubmit}>
           <label className="book-shelf-changer" type="submit" value="Submit">
          <select value={this.state.value} onChange={this.onChange}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
         </label>
         
          </form>
      
     
      
      
        )
    }
}

export default BookOption;