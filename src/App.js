import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';

import {Header} from '../src/layout/header';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return(
      <>
        <Header />
      </>
    );
  }
}

export default App;
