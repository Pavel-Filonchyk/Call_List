import React from 'react'
import {useSelector} from "react-redux"
import {Link} from 'react-router-dom';
import FormList from '../FormList/FormList';
import {AppType} from '../../store'
import './NameList.css'
type DataType = {
    values: {
        first_name: string
        last_name: string
        number: number
        message: string
        id: number
    }
}
type PropsType = {
    items: Array<DataType>
}

let NameList : React.FC<PropsType> = () => {
    const items = useSelector((state: AppType) => state.mainReducer.items)

        const names = items.sort((a: any, b: any) =>{
            let nameA=a.values.last_name.toLowerCase(), nameB=b.values.last_name.toLowerCase()
                if (nameA < nameB) 
                  return -1
                if (nameA > nameB)
                  return 1
                return 0 
                }).map((users: DataType) => {
                    return (<FormList
                    key={users.values.last_name} 
                    users={users}
                    />
                )
        })
        console.log(names)
    return(
        <div className="wrapper d-flex flex-row">
            <div className="modal_closed">
                <Link to="/" 
                    >&times;
                </Link>        
            </div>
            <div className = "wrapper d-flex flex-column">
                {names}
            </div> 
        </div>
    )
}
export default NameList

