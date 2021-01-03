import React from "react";
import firebase from "../../firebase";
import axios from "axios";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";


class TestComponent extends React.Component {

    state = {count : 0};
    
    // componentDidMount() {
    //   document.title = `You clicked ${this.state.count} times`;
    // }
    // componentDidUpdate() {
    //   document.title = `You clicked ${this.state.count} times`;
    // }

    submitRequest = async (ev) => {
      ev.preventDefault()

      const data = {"text" : "Meetings: Because none of us is as dumb as all of us."}
      const headers = {"Content-type": "application/json", "Accept": "text/plain"}
      const response = await axios.post("http://d52063e3fdc6.ngrok.io" + "/predict", data, {
        headers: headers
      });

      
      console.log(response);

    }



    render() {
      return (
        <div>
          <Header as='h1'>First Header</Header>
          <p> You clicked  time</p>
          <Button onClick={this.submitRequest}/>
          
        </div>
      );
    }
  } // {currentTime}
  
  export default TestComponent; // Don’t forget to use export default!



