import React, {Component} from 'react';
import Education from './components/Education';
import General from './components/General';
import Practical from './components/Practical';


class App extends Component {
  constructor(){
    super();

    this.state = {
      name:"",
      email:"",
      phone:"",
      school_name:"",
      study_title:"",
      study_date:"",
      company_name:"",
      position_title:"",
      main_tasks:"",
      date_start:"",
      date_end:"",

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
  }

  render(){
    return (
      <div className="col-6 mx-auto mt-5">
        <header className="App-header">
          <h1 className="text-center">CV Application</h1>
        </header>
        <General onChange={this.handleChange} name={this.state.name} />
      </div>
    )
  }
  
}

export default App;
