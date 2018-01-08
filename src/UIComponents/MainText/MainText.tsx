import * as React from "react";

export class MainText extends React.Component <{text:string, input:any}, any>{
    constructor(props) {
        super(props);
        this.state = {input: this.props.input};
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate() {
        document.getElementsByClassName("mainText")[0].scrollTop = 0;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({input: nextProps.input});
    }

    handleChange(event, idx) {
        let input = this.state.input;
        input[idx] = event.target.value;
        this.setState({input: input});
    }

    render () {
        var outputPieces = this.props.text.split('[textBox]');
        var elements = [];

        elements.push(<span className="mainText" dangerouslySetInnerHTML={{__html: outputPieces[0]}}/>);
        for(let i = 1; i < outputPieces.length; i++)
        {
            elements.push(<input className="textInput" id={'textInput'+(i-1)} type="text" value={this.state.input[i-1]} onChange={(event) => this.handleChange(event, i-1)}/>);
            elements.push(<span className="mainText" dangerouslySetInnerHTML={{__html: outputPieces[i]}}/>)
        }

        return (
            <div className="mainTextContainer">
                {elements}
            </div>
        );
    }
}