import * as React from "react";

export class MainText extends React.Component <{text:string}>{
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        document.getElementsByClassName("mainText")[0].scrollTop = 0;
    }

    render () {
        return (
            <div className="mainText">
                <p id="mainText">{this.props.text}</p>
            </div>
        );
    }
}