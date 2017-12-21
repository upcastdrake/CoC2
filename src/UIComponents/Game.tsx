import * as React from "react";
import {LeftSideBar} from "./LeftSideBar/LeftSideBar";
import {MainText} from "./MainText/MainText";
import {ButtonDock} from "./ActionButtons/ButtonDock";
import {RightSideBar} from "./RightSideBar/RightSideBar";

export class Game extends React.Component <any, any>{
    constructor(props) {
        super(props);

        this.state = {
            buttons: [  {title:"0", func:undefined},
                        {title:"1", func:undefined},
                        {title:"2", func:undefined, show: false, disable: false},
                        {title:"3", func:undefined},
                        {title:"4", func:undefined},
                        {title:"5", func:undefined},
                        {title:"6", func:undefined},
                        {title:"7", func:undefined},
                        {title:"8", func:undefined},
                        {title:"9", func:undefined},
                        {title:"10", func:undefined},
                        {title:"11", func:undefined},
                        {title:"12", func:undefined},
                        {title:"13", func:undefined},
                        {title:"14", func:undefined}
            ],
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        };
    }

    //Mega-Function that does EVERYTHING!!
    componentWillReceiveProps(nextProps) {
        //Handle main text
        if(nextProps.state.text)
            this.setState({text: (nextProps.state.txtClr ? '' : this.state.text) + nextProps.state.text});
        //Handle buttons
        if(nextProps.state.buttons) {
            var buttons = Array(15);
            if (nextProps.state.btnClr) buttons.fill({title: "", func: undefined, show: false, disable: false});
            else buttons = this.state.buttons.slice();
            //console.log('Game.componentProps: '+JSON.stringify(buttons));
            for (let i = 0; i < nextProps.state.buttons.length; i++) if (nextProps.state.buttons[i]) buttons[i] = nextProps.state.buttons[i];
            //console.log('Game.componentProps: '+JSON.stringify(buttons));
            this.setState({buttons: buttons});
        }
    }

    render() {
        const text = this.state.text;
        const buttons = this.state.buttons;
        //console.log('Game.render: '+JSON.stringify(buttons));
        return (
            <div className="game">
                <LeftSideBar />
                <MainText text={text} />
                <RightSideBar />
                <ButtonDock buttons={buttons}/>
            </div>
        );
    }
}