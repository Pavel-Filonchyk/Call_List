import React, {useEffect} from 'react'
import {Route,  Switch} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import Main from '../Main/Main'
import NameList from '../NameList/NameList'
import Background from '../Main/img/phone.jpg'
import {getElems} from '../../actions';

export default function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getElems())
    }, [])
    return (
        <>
        <section className="wrap_field flex-column d-flex justify-content-center">
            <div className="field d-flex flex-column justify-content-center "
                style={{background: `url(${Background}) center center/cover no-repeat`, height: "410px", width: "410px"}}
                >   
                <Main/>
                <Switch>
                    <Route exact path="/NameList" component={NameList}/>
                    <Route exact path="/Main" component={Main}/>
                </Switch>
            </div>
        </section>
        </>
    )
}