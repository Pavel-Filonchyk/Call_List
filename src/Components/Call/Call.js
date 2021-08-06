import {Component} from 'react';
import './Call.css' 

class Call extends Component{
    render(){
         const {phoneNumber} = this.props
    return (
        <>
            <div className="circle1" id="1"
                onClick={()=>phoneNumber(1)}
            ></div>
            <div className="circle2" id="2"
                 onClick={()=>phoneNumber(2)}
            ></div>
            <div className="circle3" id="3"
                onClick={()=>phoneNumber(3)}
            ></div>
            <div className="circle4" id="4"
                onClick={()=>phoneNumber(4)}
            ></div>
            <div className="circle5" id="5"
                onClick={()=>phoneNumber(5)}
            ></div>
            <div className="circle6" id="6"
                onClick={()=>phoneNumber(6)}
            ></div>
            <div className="circle7" id="7"
                onClick={()=>phoneNumber(7)}
            ></div>
            <div className="circle8" id="8"
                onClick={()=>phoneNumber(8)}
            ></div>
            <div className="circle9" id="9"
                onClick={()=>phoneNumber(9)}
            ></div>
            <div className="circle0" id="10"
                onClick={()=>phoneNumber(0)}
            ></div>
        </>
    )
}
}

export default Call