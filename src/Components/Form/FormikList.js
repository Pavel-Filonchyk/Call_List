import {Formik, Form, Field} from 'formik';

import './Form.css'

export default function FormikList({offModal, onSubmit}) {
  const submit = (values, {setSubmitting}) => {
    onSubmit(values)  
  }                   
    return (
      <div>
        <Formik
        initialValues={{first_name: '', last_name: '', number: '', message: ''}} 
        onSubmit={submit}
        >
        {({ isSubmitting }) => (
         <Form>
            <div data-close className="modal__close"
              onClick={offModal}
            >&times;</div>
           <Field component="input" className="modal__input"  name="first_name" type="text" required placeholder="first name"/>
              <Field component="input" className="modal__input"  name="last_name" type="text" required placeholder="last name"/>
              <Field component="input" className="modal__input"  name="number" type="text" required placeholder="Phone number"/>
              <Field component="input" className="modal__input"  name="message" type="text" required placeholder="Message"/>
           <button type="submit" disabled={isSubmitting}>
             Sender
           </button>
          </Form>
        )}
      </Formik>
    </div>
    )
}

