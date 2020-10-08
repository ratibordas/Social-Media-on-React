import React from 'react'
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form'
import { requiredField } from '../../validators/validators';
import {InputComponent} from '../FormStuff/FormStuff'
import {loginningThunkCreator} from '../../reducers/auth-reducer'
import { Redirect } from 'react-router-dom';



const LoginForm = (props) => {
    
    return (
        
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field  placeholder={"Email"} name={"email"} component={InputComponent} validate={[requiredField]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} type={"password"} component={InputComponent} validate={[requiredField]}/>
                </div>
                <div>
                    <Field type={"checkbox"} component={"input"} name={"rememberMe"}/> remember me
                </div>
                <div>
                   <button type="submit">Login in</button>
                </div>
            </form>
        

    )
}


// parent login component
const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginningThunkCreator(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>Login Page</h1>
            <LoginReduxForm  onSubmit={onSubmit}/>
        </div>

    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

//redux-form HOC
const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)





export default connect(mapStateToProps, {loginningThunkCreator})(Login);