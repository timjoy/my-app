import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//import { Fraction, toTex } from 'algebra.js';
//import { Node, Context } from 'react-mathjax';
class App extends React.Component{
constructor(props) {
super(props);
this.handleNumerInput = this.handleNumerInput.bind(this);
this.handleDenomInput = this.handleDenomInput.bind(this);
this.handleReduce = this.handleReduce.bind(this);
this.handleCount = this.handleCount.bind(this);
this.state = {numerInput: '', denomInput: '', rednumOut: '', reddenOut: '', count:0};
}
//handleClick = () => {
// this.setState((prevState) => ({ counter: prevState.counter + 1 }));
//};
handleNumerInput = (event) => {
this.setState({ numerInput: event.target.value });
};
handleDenomInput = (event) => {
this.setState({ denomInput: event.target.value });
};
//handleDenomInput = (event) => {
// this.setState({ denomInput: event.target.value })
// this.setState((prevState) => ({denomInput: this.state.denomInput }));
//};
handleReduce = (prevState) => {
this.setState((prevState) => ({
rednumOut: this.state.denomInput / 2, reddenOut: this.state.denomInput / 2,
//if(this.state.numerInput % 2 == 0){this.state.numerInput == this.state.numerInput /2}
}));
};
handleCount = (prevState) => {
this.setState((prevState) => ({
count: this.state.count +1
}))
};

render () {
console.log(this.state.numerInput)
console.log(this.state.denomInput)
console.log(this.state.count)
return (
<div>
<form>
numerator:
<input type="number" value={this.state.numerInput} onChange={this.handleNumerInput} />
<br/>
denominator:
<input type="number" value={this.state.denomInput} onChange={this.handleDenomInput} />
</form>
<button onClick={this.handleReduce}>Reduce</button>
<p type="number">Reduced fraction: <br/> {this.state.rednumOut} <br/> ------- <br/> {this.state.reddenOut}</p>
<form>
counter:
</form>
<button onClick={this.handleCount}>Counter: {this.state.count} </button>
</div>
);
}
}
export default App;
ReactDOM.render(<App/>, document.getElementById('root'));
