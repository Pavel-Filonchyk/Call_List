import {Component} from 'react'
import {InjectedFormProps, Field, reduxForm} from 'redux-form'
import {ValueType} from '../Main/Main'

class SearchForm extends Component <InjectedFormProps <ValueType>>{
    render(){
        const {handleSubmit} = this.props
        return(
            <form onSubmit={handleSubmit}>  
                <Field component="input" className="input" type="text" placeholder="name"/>
                <button
                    type="submit"
                    className="close_result"
                >&times; 
                </button>
            </form>
        )
    }
} 
export default reduxForm <ValueType>({   
    form: "searchInput"         
})(SearchForm)
