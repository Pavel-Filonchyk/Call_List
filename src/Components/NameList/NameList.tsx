import React, {Component} from 'react'
import { connect } from 'react-redux'
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
class NameList extends Component  <PropsType>{
    render() {
        const {items} = this.props;

        const names = items.sort((a, b) =>{
            let nameA=a.values.last_name.toLowerCase(), nameB=b.values.last_name.toLowerCase()
                if (nameA < nameB) 
                  return -1
                if (nameA > nameB)
                  return 1
                return 0 
                }).map(users => {
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
}
const mapStateToProps = (state: AppType) =>{
    return {
        items: state.mainReducer.items
    }
}
export default connect(mapStateToProps)(NameList)

