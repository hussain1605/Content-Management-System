import React from "react";
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
class Editor extends React.Component{
  constructor(props){
    super(props)

    this.state = {
    url:'',
    title:'',
    desc:'',
    body: '',
    }
  }

  changeHandler = e =>{
    this.setState({[e.target.name]:e.target.value})
  }

  submitHandler = e =>{
    e.preventDefault()
    console.log(this.state)
    /*axios.post('http://10.10.3.226:3000/tasks', this.state)
    .then(response =>{
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })*/
  }

        render(){
          const{url, title, desc, body} = this.state
            return (
               <div>
                 <form onSubmit={this.submitHandler}>
                   <p>Enter url</p>
                   <input type="text" name="url" value={url} onChange={this.changeHandler} />
                   <p>Enter Title</p>
                   <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                   <p>Enter Description</p>
                   <input type="text" name="desc" value={desc} onChange={this.changeHandler}/>
                   <p>Enter Body</p>
                   <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                   <ReactQuill  />
                   <button type="submit" name="button">Save</button>
                 </form>

               </div>
           );
        }
    }
    export default Editor;
