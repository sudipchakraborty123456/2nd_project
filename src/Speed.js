import React from 'react';

class Speed extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        {
            //debugger;
            if (this.props.symbols !== 0 && this.props.sec !== 0) {
                const wpm = (this.props.symbols/5)/(this.props.sec/60);
                return (
                    <span className="col-2" style={{"color":"white"}}>
                       {Math.round(wpm)} Wpm
                    </span>
                );
            }
            else{
                return (<span className="col-2" style={{"color":"white"}}>
                   0 Wpm
                 </span>);
            }
        }


    }
}
export default Speed;