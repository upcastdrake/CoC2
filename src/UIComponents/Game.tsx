import * as React from "react";
import {LeftSideBar} from "./LeftSideBar/LeftSideBar";
import {MainText} from "./MainText/MainText";
import {ButtonDock} from "./ActionButtons/ButtonDock";
import {RightSideBar} from "./RightSideBar/RightSideBar";

export class Game extends React.Component <any, any>{
    constructor(props) {
        super(props);
        this.clearOutput = this.clearOutput.bind(this);
        this.output = this.output.bind(this);

        this.state = {
            buttons: [  {title:"0", func:this.clearOutput},
                        {title:"1", func:this.clearOutput},
                        {title:"2", func:this.clearOutput, show: true, disable: false},
                        {title:"3", func:this.clearOutput},
                        {title:"4", func:this.clearOutput},
                        {title:"5", func:this.clearOutput},
                        {title:"6", func:this.clearOutput},
                        {title:"7", func:this.clearOutput},
                        {title:"8", func:this.clearOutput},
                        {title:"9", func:this.clearOutput},
                        {title:"10", func:this.clearOutput},
                        {title:"11", func:this.clearOutput},
                        {title:"12", func:this.clearOutput},
                        {title:"13", func:this.clearOutput},
                        {title:"14", func:this.clearOutput}
            ],
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        };
    }

    clearOutput() {
        this.setState({text: ""});
        console.log("game.state.text: \""+this.state.text+"\"");
    }

    output(text:string) {
        let copy:string = this.state.text;
        //Fix newlines
        text.replace(/\n/g, String.fromCharCode(13, 10));
        //append new output
        copy += text;
        //update UI
        this.setState({text: copy});
    }

    //Mega-Function that does EVERYTHING!!
    componentWillReceiveProps(nextProps) {
        //Process any button
        if(nextProps.bidx != undefined && nextProps.bidx <= 14) {
            let idx = nextProps.bidx;
            let buttons = this.state.buttons.slice();
            buttons[idx].title = nextProps.btext;
            buttons[idx].toolTitle = nextProps.bttH;
            buttons[idx].toolTip = nextProps.bttB;
            buttons[idx].func = nextProps.bf;
            buttons[idx].args = nextProps.bargs;
            buttons[idx].show = nextProps.bshow;
            buttons[idx].disable = nextProps.bdisable;
            this.setState({buttons: buttons});
        }
        //Process Main text changes
        if(nextProps.mtext != undefined) {
            let text = this.state.text;
            text += nextProps.mtext;
            this.setState({text: text});
        }

    }

    render() {
        const text = this.state.text;
        const buttons = this.state.buttons;

        return (
            <div className="game">
                <LeftSideBar />
                <MainText text={text} />
                <ButtonDock buttons={buttons}/>
                <RightSideBar />
            </div>
        );
    }
}