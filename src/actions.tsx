import {serverAPI} from './serverAPI/serverAPI'
import {ValueType} from "./Components/Main/Main"
import {DataType} from "./Components/Main/Main"
import {InferActionTypes} from "./store"

export type ActionTypes = InferActionTypes<typeof actions>  

export const getElems = () =>{
    return (dispatch: any) =>{
        serverAPI.getItems()  
        .then((DataType) => dispatch(actions.loader(DataType)))
        .catch(() => dispatch(actions.itemsError())); 
    }
}
export const postElems = (values: ValueType) =>{
    return (dispatch: ValueType) =>{
        serverAPI.postItems(values)
    }
}
export const actions = {
    loader: (data: DataType<string>[]) => ({
        type: 'LOADER',
        payload: data   
    } as const),
    itemsError: () => ({
        type: 'ITEMS_ERROR',
    }as const),
    input: (value: string) => ({
        type: 'INPUT_VALUE',
        payload: value       
    }as const),
    deleteBox: (last_name: string) => ({
        type: 'DELETE_BOX',
        payload: last_name
    }as const),
    viewModal: () => ({
        type: 'VIEW_MODAL'
    }as const),
    closeModal: () => ({
        type: 'CLOSE_MODAL',
    }as const),
    allNums: (num: number) => ({
        type: 'ADD_NUMS',
        payload: num
    }as const)
}