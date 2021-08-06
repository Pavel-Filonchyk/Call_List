import React, {Component} from 'react'
import {InjectedFormProps, Field, reduxForm} from 'redux-form'
import './form.css'
import {ValueType} from '../Main/Main'

type PropsType = {  
    offModal: () => void
    }
class Form extends Component <InjectedFormProps <ValueType, PropsType> & PropsType>{
    render(){
        const {handleSubmit, offModal} = this.props
        return(
            <form onSubmit={handleSubmit}>  
                <div data-close className="modal__close"
                    onClick={offModal}
                >&times;</div>
                <>
                <Field component="input" className="modal__input"  name="first_name" type="text" required placeholder="first name"/>
                <Field component="input" className="modal__input"  name="last_name" type="text" required placeholder="last name"/>
                <Field component="input" className="modal__input"  name="number" type="text" required placeholder="Phone number"/>
                <Field component="input" className="modal__input"  name="message" type="text" required placeholder="Message"/>
                </>
                <button className="btn btn_dark btn_min"
                >Sender</button>
            </form>
        )
    }
} 
export default reduxForm<ValueType, PropsType>({   
    form: "Phone_Name"        
})(Form)


