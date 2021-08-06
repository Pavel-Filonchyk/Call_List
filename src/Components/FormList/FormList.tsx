import React from 'react'
import './FormList.css'

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
let FormList: React.FC<PropsType> = ({users}) => {
    return(
        <>
            <div className="main_card d-flex">
            <input type="checkbox" className="checkbox" />
                <div className="wrap_card d-flex flex-column">
                    <div className="card">{users.values.first_name}</div>
                    <div className="card">{users.values.last_name}</div>
                    <div className="card">phone -&nbsp; {users.values.number}</div>
                    <div className="card">{users.values.message}</div>
                </div>
            </div>
        </>
    )
} 

export default FormList
