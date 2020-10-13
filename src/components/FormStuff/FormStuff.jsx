import React from 'react'
import "./FormStuff.scss";


export const TextareaComponent = ({ input, meta, ...props }) => {


    const errorConditon = meta.touched && meta.error;

    return (
        <div className="form-control">
            <textarea {...props} {...input} className={`${errorConditon && "error"}`} />
            {errorConditon && <div className="form-control__wrap-error">
                <span>{meta.error}</span>
            </div>}


        </div>
    )
}

export const InputComponent = ({ input, meta, ...props }) => {


    const errorConditon = meta.touched && meta.error;

    return (
       
        <div className="form-control">
            <input {...props} {...input} className={`${errorConditon && "error"}`} />
            {errorConditon && <div className="form-control__wrap-error">
                <span>{meta.error}</span>
            </div>}
           

        </div>
        

    )
}

