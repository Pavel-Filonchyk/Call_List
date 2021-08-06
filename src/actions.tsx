import {serverAPI} from './serverAPI/serverAPI'

type DataType = {
    values: {
        first_name: string
        last_name: string
        number: number
        message: string
        id: number
    }
}

const loader = (data: Array<DataType>) => {
    return {
        type: 'LOADER',
        payload: data   
    }
}
type ItemsErrorType = {
    type: 'ITEMS_ERROR'
}
const itemsError = () : ItemsErrorType => {
    return {
        type: 'ITEMS_ERROR',
    }
}
type InputType = {
    type: 'INPUT_VALUE'
    payload: any
}
const input = (value: string): InputType=> {
    return {
        type: 'INPUT_VALUE',
        payload: value       
    } 
}
const deleteBox = (last_name: string) => {
    return {
        type: 'DELETE_BOX',
        payload: last_name
    }
}
type ViewModalType = {
    type: 'VIEW_MODAL' 
}
const viewModal = (): ViewModalType=> {
    return {
        type: 'VIEW_MODAL',
    }
}
type CloseModalType = {
    type: 'CLOSE_MODAL'
}
const closeModal = (): CloseModalType => {
    return {
        type: 'CLOSE_MODAL',
    }
}
type AllNumType = {
    type: 'ADD_NUMS',
        payload: any
}
const allNums = (num: number) => {
    return {
        type: 'ADD_NUMS',
        payload: num
    }
}
const getElems = () =>{
    return (dispatch: any) =>{
        serverAPI.getItems()  
        .then((data) => dispatch(loader(data)))
        .catch(() => dispatch(itemsError())); 
    }
}
type ValueType = { 
    first_name: string
    last_name: string
    number: number
    message: string
}
const postElems = (values: ValueType) =>{
    serverAPI.postItems(values)
}

export {
    loader,
    itemsError,
    input,
    deleteBox,
    viewModal,
    closeModal,
    allNums,
    postElems,
    getElems

}