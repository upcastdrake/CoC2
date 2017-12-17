import * as React from "react";

export class MainText extends React.Component <{text:string}>{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="mainText">
                <p id="mainText">{this.props.text}</p>
            </div>
        );
    }
}