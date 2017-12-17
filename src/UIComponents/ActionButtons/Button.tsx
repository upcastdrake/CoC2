import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Button extends React.Component<{title:string, doClick:any, show:boolean, disable:boolean/*, index:number*/}/*, {value:string}*/> {
    /*constructor(props) {
        super(props);
        this.state = {index:};
    }*/

    render() {
        if(this.props.show)
            return (
                <button className="button" onClick={() => this.props.doClick()} disabled={this.props.disable}>
                    {this.props.title}
                </button>
            );
        else
            return (
                <button className="button" disabled/>
            );
    }
}