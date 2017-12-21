import * as React from 'react';
import * as ReactDOM from 'react-dom';
var $ = require('jquery');
import './index.css';
import {Game} from "./UIComponents/Game";
import * as _ from "./GameData/Content/BaseContent";

// ========================================

//Render Game UI
ReactDOM.render(
	<Game />,
	document.getElementById('root')
);

//Handle fontsize as a function of Game UI size
function fontsize(){
	let fontSize = ($(".game").width() + $(".game").height()*.104)*.015;
	$(".game").css("font-size", fontSize);
	$(".button").css("font-size", fontSize);
}

//Handle buttonborders as a function of buttonrow size
function buttonBorders(){
	let borderSize = $(".button-row").height()/13;
	if(borderSize > $(".game").height()/120) borderSize = $(".game").height()/120;
	$(".button").css("border-width", borderSize);
	$(".button").css("border-radius", borderSize*2.3);
}

//Initialize font and button border sizes, start resize handler, call Game logic entry point
$(document).ready(function () {
    fontsize();
    buttonBorders();
    $(window).resize(function() {
        fontsize();
        buttonBorders();
    });
    _.StartIntro();
});