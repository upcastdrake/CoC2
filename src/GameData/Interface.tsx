import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Game} from "../UIComponents/Game";

//Functions that interact with the UI
export class Interface {

    static addButton(idx:number, text:string = null, f:Function = null, args:any = undefined, ttH:string = null, ttB:string = null) {
        ReactDOM.render(
            <Game bidx={idx} btext={text} bf={f} bargs={args} bttH={ttH} bttB={ttB} bshow={true} bdisable={false}/>,
            document.getElementById('root')
        );
    }

    static addDisabledButton(idx:number, text:string = null, ttH:string = null, ttB:string = null) {
        ReactDOM.render(
            <Game bidx={idx} btext={text} bf={null} bargs={null} bttH={ttH} bttB={ttB} bshow={true} bdisable={true}/>,
            document.getElementById('root')
        );
    }

    static output(text:string = "\n\n") {
        text.replace(/\n/g, "<br>");
        ReactDOM.render(
            <Game mtext={text}/>,
            document.getElementById('root')
        );
    }


}