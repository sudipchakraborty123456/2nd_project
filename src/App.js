import React from 'react';
import './App.css';
import Preview from "./Preview";
import Speed from "./Speed";
import './preview.css'
class App extends React.Component {

  constructor() {
    super();
    var a = ["An article is any member of a class of dedicated words that are used with noun phrases to mark the identifiability of the referents of the noun phrases.", "Sudip Chakraborty", "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.", "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. ", "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML."]
    let b = a[Math.floor(Math.random() * a.length)];
    //debugger;
    let initialState = {
      textLibeary: a,
      text: b,
      userinput: '',
      symbols: 0,
      sec: 0,
      started: false,
      finished: false
    };
    this.state = initialState;
  }
  onRestart = () => {
    //debugger;
    let a = this.state.textLibeary;
    this.setState({

      text: a[Math.floor(Math.random() * a.length)],
      userinput: '',
      symbols: 0,
      sec: 0,
      started: false,
      finished: false
    })
  }
  onUserinputChange = (e) => {
    // debugger;
    const v = e.target.value;
    this.setTimer();
    this.onFinish(v);
    this.setState({
      userinput: v,
      symbols: this.countCurrectSymbols(v)
    }
    )
    //console.log(this.state)
  }
  onFinish = (userInput) => {
    if (userInput === this.state.text) {
      clearInterval(this.interval);
      this.setState({
        finished: true
      })
    }
  }
  setTimer = () => {
    if (!this.state.started) {
      this.setState({
        started: true
      })
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return {
            sec: prevProps.sec + 1
          }
        })
      }, 1000)
    }
  }
  countCurrectSymbols = (userInput) => {
    const text = this.state.text.replace(' ', '');
    return userInput.replace(' ', '').split('').filter((s, i) => s === text[i]).length
  }
  render = () => {
    //debugger;
    const { userinput } = this.state;
    return (
      <div className="container ">
        <div className="text-center row">
          <h1 className="heading col-12">Test your typing speed here...</h1>
        </div>
        <div className="mainDiv row">
          <div className="row mainTop">
            <Preview text={this.state.text} userInput={userinput} />
          </div>
          <div className="row mainButtom">
            <textarea readOnly={this.state.finished} value={userinput} onChange={(e) => this.onUserinputChange(e)} className="text-center input" placeholder="Start typing..."></textarea>
          </div>
          <div className="buttomSection row">

            <Speed className="float-start wpm " sec={this.state.sec} symbols={this.state.symbols} />
            <div className="col-10">
            <button className="restartBtn float-end btn btn-light " onClick={() => this.onRestart()}>Restart</button>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default App;
