import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"

import Result from '../Result/Result'
import FormikList from '../Form/FormikList'
import Call from '../Call/Call'
import SearchForm from '../SearchForm/SearchForm'
import {AppType} from '../../store'
import './Main.css'
import {actions, postElems} from '../../actions'

export type DataType<M> = {
    values: {
        first_name: string
        last_name: string
        number: number
        message: M 
        id: number
    }
}
export type ValueType = { 
    first_name: string
    last_name: string
    number: number
    message: string
}
type PropsType = {
    loader: (data: DataType<string>[]) => void 
    getElems: () => void
    postElems: (values: ValueType) => void
    items: DataType<string>[]
    text: string
    modal: boolean
    adder: Array<any>
    viewModal: () => void
    closeModal: () => void
    allNums: (num: number) => void
    itemsError: () => void
    input: (newText: string) => void      
}
let Main : React.FC<PropsType> = () => {
    const dispatch = useDispatch()
    
    const items = useSelector((state: AppType) => state.mainReducer.items)
    const text = useSelector((state: AppType) => state.mainReducer.text)
    const modal = useSelector((state: AppType) => state.mainReducer.modal)
    const adder = useSelector((state: AppType) => state.mainReducer.adder)
    console.log(items)
    const onModal = () => {
        dispatch(actions.viewModal())
    }
    const offModal = () => {
        dispatch(actions.closeModal())
    }
    const phoneNumber = (num: number) => {
        dispatch(actions.allNums(num))
    }
    const onInput = (value: any, dispatch: any, props: any) =>{
        dispatch(actions.input(value))
        dispatch(props.reset())
    }   
    const submit = (values: any) => {
        dispatch(postElems(values))
    }
    const texts = Object.values(text).join('') 
    const name = items.filter((user: DataType<string>) => user.values.last_name.toLowerCase() === texts || user.values.first_name.toLowerCase() === texts)
        .map((users: any) =>{
        return (<Result
        key={users.values.first_name} 
        users={users}
        />
        )
    })

    const viewNum = adder.join(" ")
    let telethone = `tel:${viewNum}`
    return (
        <>        
            <Link to="/NameList/">
                <i className="link bi bi-card-list"></i>
            </Link> 
            <div className="wrap_input">
                <SearchForm
                    onSubmit={onInput}
                />
            </div>
            <div onClick={onModal}
            >
                <i className="circle bi bi-person-plus"></i>
            </div>
            <Call
                phoneNumber={phoneNumber}
            />
            <div className="phone d-flex">
                <i className="pone_icon bi bi-telephone"></i><a href={telethone}><b>{viewNum}</b></a>
            </div>

            <div className = "result">
                {name}
            </div>
 
            <div className="modal"
                style={{display: modal ? "block" : "none"}}
            >
                <div className="modal__dialog">
                    <div className="modal__content">   
                        <FormikList
                            offModal={offModal}
                            onSubmit={submit}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main






