import * as React from 'react';
import * as ReactDOM from 'react-dom';
var $ = require('jquery');
import './index.css';
import {Game} from "./UIComponents/Game";
import {GameStart} from "./GameData/creation";

// ========================================

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);

function fontsize(){
	let fontSize = ($(".game").width() + $(".game").height()*.104)*.015;
	$(".game").css("font-size", fontSize);
	$(".button").css("font-size", fontSize);
}

function buttonBorders(){
	let borderSize = $(".button-row").height()/10;
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
    GameStart.StartIntro();
});