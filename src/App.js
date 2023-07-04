import React from 'react';

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
      <div className='App'>jk
    </div>
    );
  }
}

export default App;
