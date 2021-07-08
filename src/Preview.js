import React from 'react';

class Preview extends React.Component {
    constructor(props){
        //debugger;
        super();
        
    }
    render() {
        //debugger;
        this.state={
            text:this.props.text.split(''),
            userInput:this.props.userInput.split('')
        }
       
        return(
            
            <div className="preview"> 
                    {
                        
                        this.state.text.map((s,i)=>{
                            //debugger;
                            let color;
                            if(i<this.props.userInput.length){
                                color = s === this.state.userInput[i] ? 'lightgreen' : 'pink';
                            }
                            return(<span key={i} style={{backgroundColor: color}}>{s}</span>)
                        })
                    }
            </div>
        );
    }
}
export default Preview;