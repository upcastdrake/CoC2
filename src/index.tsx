import * as React from 'react';
import * as ReactDOM from 'react-dom';
var $ = require('jquery');
import './index.css';

class Button extends React.Component<{Title:string, Function:any, Show:boolean, Disable:boolean}/*, {value:string}*/> {
	/*  constructor(props) {
		super(props);
		this.state = {value:''};
	}*/

	render() {
		return (
			<button className="button" onClick={() => this.props.Function()}>
			{this.props.Title}
			</button>
		);
	}
}

class LeftSideBar extends React.Component {	
	render() {
		return(
			<div className="leftSideBar">
				<div>Left Sidebar</div>
			</div>
		);
	}
}

class MainText extends React.Component <any, {text:string}>{
	constructor(props) {
		super(props);
		this.state = {text: this.props.text};
	}
	
	render () {
		return (
			<div className="mainText">
				<p id="mainText">{this.state.text}</p>
			</div>
		);	
	}
}

class ButtonDock extends React.Component <any, any>{
	constructor(props) {
		super(props);
		this.state = {	Title: Array(15).fill(null), 
						ToolTitle: Array(15).fill(null), 
						Tooltip: Array(15).fill(null), 
						Function: Array(15).fill(clearOutput), 
						Show: Array(15).fill(null), 
						Disable: Array(15).fill(null)
					};
	}
	
	renderButton(i:number) {
		return <Button Title={String(i)} Function={this.state.Function[i]} Show={true} Disable={false}/>;
	}
	
	render() {
		return(
			<div className="buttonDock">
				<div className="button-row">
				{this.renderButton(0)}
				{this.renderButton(1)}
				{this.renderButton(2)}
				{this.renderButton(3)}
				{this.renderButton(4)}
				</div>
				<div className="button-row">
				{this.renderButton(5)}
				{this.renderButton(6)}
				{this.renderButton(7)}
				{this.renderButton(8)}
				{this.renderButton(9)}
				</div>
				<div className="button-row">
				{this.renderButton(10)}
				{this.renderButton(11)}
				{this.renderButton(12)}
				{this.renderButton(13)}
				{this.renderButton(14)}
				</div>
			</div>
		);
	}
}

class RightSideBar extends React.Component {
	render() {
		return(
			<div className="rightSideBar">
				<div>Right Sidebar</div>
			</div>
		);
	}
}

class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<LeftSideBar />
				<MainText text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
				<ButtonDock />
				<RightSideBar />
			</div>
		);
	}
}

// ========================================

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);

function fontsize(){
	var fontSize = ($(".game").width() + $(".game").height()*.104)*.015;
	$(".game").css("font-size", fontSize);
	$(".button").css("font-size", fontSize);
}

function buttonBorders(){
	var borderSize = $(".button-row").height()/10;
	if(borderSize > $(".game").height()/120) borderSize = $(".game").height()/120;
	$(".button").css("border-width", borderSize);
	$(".button").css("border-radius", borderSize*2.3);
}

$(document).ready(function () {
    fontsize();
    buttonBorders();
    $(window).resize(function() {
        fontsize();
        buttonBorders();
    });
});

function clearOutput(){
	$("#mainText").setState({text:"test"});
}