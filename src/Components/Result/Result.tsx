import React from 'react'
import './Result.css'

type PropsType = {    
    users: {
        values:{
            first_name: String
            last_name: String
            message: String
            number: Number
        }
    }           
}
let Result : React.FC<PropsType> = ({users}) => {
    const {first_name, last_name, message, number} = users.values
    return(
        <div className="result d-flex justify-content-center">
            <div className="wrapper_card d-flex justify-content-center"> 
                <div className="wrapper_content d-flex flex-column">
                    <div className="content">{first_name}</div>
                    <div className="content">{last_name}</div>
                    <div className="content">phone -&nbsp; {number}</div>
                    <div className="content">{message}</div>
                </div>
            </div>
        </div>
    )
} 

export default Result
