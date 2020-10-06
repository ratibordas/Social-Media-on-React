import React from 'react'
import { reduxForm, Field } from 'redux-form'


const LoginForm = (props) => {
    
    return (
        
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field  placeholder={"Login"} name={"login"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={"input"}/>
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
const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login Page</h1>
            <LoginReduxForm  onSubmit={onSubmit}/>
        </div>

    )
}


//redux-form HOC
const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)





export default Login;