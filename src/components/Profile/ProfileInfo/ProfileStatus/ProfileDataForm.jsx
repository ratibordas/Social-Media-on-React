import React from 'react'
import { reduxForm, Field } from 'redux-form'
import '../../../FormStuff/FormStuff.scss'



const ProfileDataForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit} className="profile__form">
            <div>
            <Field  placeholder={"Name"} name={"fullName"} component={"input"}/>
            </div>
            <div>
            <Field  placeholder={"About Me"} name={"aboutMe"} component={"input"}/>
            </div>
            <div>
            <Field  placeholder={"Job Description"} name={"lookingForAJobDescription"} component={"textarea"}/>
            </div>
            <div>
                <div>
                <strong>Contact:</strong>
                 <ul> 
                 {
                     Object.keys(props.profile.contacts).map(key => {
                         return <li key={key} >{key}
                          <Field  name={"contacts." + key}  component={"input"} />
                         </li>
                     })
                 }
                 </ul>
                </div>
            
            
            </div>

            {props.error && <div className="allerror">
                <p className="allerror__text">{props.error}</p>
            </div>}
            
           
             <button>Save Changes</button>
             

        </form>
    )

}

const ProfileDataFormRedux = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormRedux;