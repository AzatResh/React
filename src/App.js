import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';

import {Header} from '../src/layout/header';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      posts: [
        {id: 'abc1', name: "JS"},
        {id: 'abc2', name: "React"},
        {id: 'abc3', name: "Flutter"},
      ]
    }
  }

  removePost = (id) =>{
    this.setState({posts: this.state.posts.filter(post => (post.id!==id))});
  }

  render(){
    const {posts} = this.state;

    return(
      
      <Header />
    );
  }
}

export default App;
