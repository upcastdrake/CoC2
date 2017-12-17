import * as React from "react";
import {LeftSideBar} from "./LeftSideBar/LeftSideBar";
import {MainText} from "./MainText/MainText";
import {ButtonDock} from "./ActionButtons/ButtonDock";
import {RightSideBar} from "./RightSideBar/RightSideBar";

export class Game extends React.Component <any, any>{
    constructor(props) {
        super(props);
        this.clearOutput = this.clearOutput.bind(this);
        this.addButton = this.addButton.bind(this);
        this.state = {
            buttons: {	title: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
                toolTitle: Array(15).fill(""),
                tooltip: Array(15).fill(""),
                func: Array(15).fill(this.clearOutput),
                args: undefined,
                show: [true, true, true, false, false, false, false, false, false, false, false, false, false, false, false],
                disable: [false, false, true, false, false, false, false, false, false, false, false, false, false, false, false]
            },
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

    addButton(idx:number, text:string = null, f:Function = null, args:any = undefined, ttH:string = null, ttB:string = null) {
        if(idx <= 14) {
            var buttons = this.state.buttons.slice();
            buttons.title[idx] = text;
            buttons.toolTitle[idx] = ttH;
            buttons.tooltip[idx] = ttB;
            buttons.func[idx] = f;
            buttons.args[idx] = args;
            buttons.show[idx] = true;
            buttons.disable[idx] = false;
        }
        this.setState({buttons: buttons});
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