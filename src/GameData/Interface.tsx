import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Game} from "../UIComponents/Game";

//Interface State models Game UI component state
export class Interface {
    state = {
        buttons: [],
        text: '',
        btnClr: false,
        txtClr: false
    };

    addButton(idx:number, text:string = undefined, f:Function = undefined, args:any = undefined, ttH:string = undefined, ttB:string = undefined) {
        if(idx <= 14) this.state.buttons[idx] = {title:text, func:f, args:args, ttH:ttH, ttB:ttB, show:true, disable:false};
        //console.log('Interface.addButton: '+JSON.stringify(this.state.buttons[idx]));
    }

    addDisabledButton(idx:number, text:string = undefined, ttH:string = undefined, ttB:string = undefined) {
        this.state.buttons[idx] = {title:text, ttH:ttH, ttB:ttB, show:true, disable:true};
    }

    clearMenu() {
        this.state.buttons = [];
        this.state.btnClr = true;
    }

    output(text:string = "\n\n") {
        text.replace(/\n/g, "<br>");
        this.state.text += text;
    }

    clearOutput() {
        this.state.text = '';
        this.state.txtClr = true;
    }

    render() {
        ReactDOM.render(
            <Game state={this.state}/>,
            document.getElementById('root')
        );
    }
}