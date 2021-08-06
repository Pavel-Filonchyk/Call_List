
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom';
import {Component} from 'react';
import {connect} from 'react-redux';
import NameList from '../NameList/NameList';
import Result from '../Result/Result'
import Form from '../Form/Form';
import Call from '../Call/Call';
import SearchForm from '../SearchForm/SearchForm';
import {AppType} from '../../store'
import './Main.css';
import {viewModal, closeModal, loader, itemsError, input, allNums, getElems, postElems} from '../../actions';
import Background from './img/phone.jpg'

type DataType = {
    values: {
        first_name: string
        last_name: string
        number: number
        message: string
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
    viewModal: () => void
    closeModal: () => void
    allNums: (num: number) => void
    itemsError: () => void
    loader: (data: Array<DataType>) => void
    input: (newText: string) => void
    getElems: () => void
    postElems: (values: ValueType) => void
    items: Array<DataType>
    text: string
    modal: boolean
    adder: Array<any>
}
class Main extends Component <PropsType>{
    onModal = () => {
        this.props.viewModal()
    }
    offModal = () => {
        this.props.closeModal()
    }
    phoneNumber = (num: number) => {
        this.props.allNums(num)
        console.log(num)
    }
    onInput = (value: any, dispatch: any, props: any) =>{
        this.props.input(value)
        dispatch(props.reset())
    }   
    submit = (values: ValueType, dispatch: any, props: any) => {
        console.log(values)
        this.props.postElems(values)
    }
    componentDidMount() {
        this.props.getElems()
    }

    render(){
        const {items, text, modal, adder} = this.props

        const texts = Object.values(text).join('') 
        const name = items.filter((user: DataType) => user.values.last_name.toLowerCase() === texts || user.values.first_name.toLowerCase() === texts)
            .map(users =>{
            return (<Result
            key={users.values.first_name} 
            users={users}
            />
            )
        })

        const viewNum = adder.join(" ")
        console.log(viewNum)
    return (
        <Router>
            <div className="wrap_field flex-column d-flex justify-content-center">
                <div className="field d-flex flex-column justify-content-center "
                    style={{background: `url(${Background}) center center/cover no-repeat`, height: "410px", width: "410px"}}
                    >               
                    <Link to="/NameList/">
                        <i className="link bi bi-card-list"></i>
                    </Link> 
                    <div className="wrap_input">
                        <SearchForm
                            onSubmit={this.onInput}
                        />
                    </div>
                    <div onClick={this.onModal}
                    >
                        <i className="circle bi bi-person-plus"></i>
                    </div>
                    <Call
                        phoneNumber={this.phoneNumber}
                    />
                    <div className="phone d-flex">
                        <i className="pone_icon bi bi-telephone"></i><a href="tel:{viewNum}"><b>{viewNum}</b></a>
                    </div>
                    
                </div>

                <Route exact path="/NameList" component={NameList}/>
                <Route exact path="/Main" component={Main}/>

                <div className = "result">
                    {name}
                </div>
            </div>
 
            <div className="modal"
                style={{display: modal ? "block" : "none"}}
            >
                <div className="modal__dialog">
                    <div className="modal__content">   
                        <Form
                            offModal={this.offModal}
                            onSubmit={this.submit}
                        />
                    </div>
                </div>
            </div>
        </Router>
       
    )
    }
}

const mapStateToProps = (state: AppType) =>{
    return {
        items: state.mainReducer.items,
        text: state.mainReducer.text,
        modal: state.mainReducer.modal,   
        adder: state.mainReducer.adder,
    }
}

const mapDispatchToProps = {
    loader,      
    itemsError,
    viewModal,
    closeModal,
    input,
    allNums,
    getElems,
    postElems
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)





