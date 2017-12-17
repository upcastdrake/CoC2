import * as React from "react";
import {Button} from "./Button";

export class ButtonDock extends React.Component <any, any>{
    constructor(props) {
        super(props);
    }

    renderButton(i:number) {
        return <Button 	title={this.props.buttons.title[i]}
                          doClick={this.props.buttons.func[i]}
                          show={this.props.buttons.show[i]}
                          disable={this.props.buttons.disable[i]}/>;
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