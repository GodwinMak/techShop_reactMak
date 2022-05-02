import React, {useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup' 
import ReactCardFlip from 'react-card-flip'
import './Form.scss'

const initialValues = {
            name: '',
            email:'',
            password: ''
}

const onSubmit = values =>{
    console.log ('form data', values)
}



const validationSchema = Yup.object({
    name:Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required("Required"),
    password: Yup.string().required("Required") 
})

const SignUp = () => {

    const [isFlipped, setIsFlipped] = useState(false);
    const handleclick = () => {
        setIsFlipped(!isFlipped)
    }   

    
    return(
        <div className='form-container'>
            <div className='card'>
                <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' className='inner-box'>
         <div className='card-front'>
                    <h2>LOGIN</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        <Form>
                            <div className='form-contro'>
                                <label htmlFor='email'>Email</label>
                                <Field type='email' className='input-box' 
                                autoComplete='email'  
                                name='email'/>
                                <ErrorMessage name='email'/>                                
                            </div>

                            <div className='form-contro'>
                                <label htmlFor='password'>Password</label>
                                <Field type='password' className='input-box' 
                                autoComplete="current-password"  
                                name='password'/>
                                <ErrorMessage name='password'/>
                            </div>

                            <input type='checkbox'></input><span className='rem-span'>Remember Me</span>
                            <button type='submit' className='form-submit-btn'>Loggin</button>
                        </Form>
                    </Formik>
                    <button type='button' className='form-btn' onClick={handleclick}>I'm New here</button>
                    <a href='#password'className='for-pass-link'>Forget Password</a>
                </div>
                <div className='card-back'>
                    <h2>REGISTER</h2>
                    <Formik>
                        <Form>
                            <div className='form-contro'>
                                <label htmlFor='name'>Username</label>
                                <Field type='text' className='input-box' 
                                autoComplete="name"  
                                name='name'/>
                                <ErrorMessage name='name'/>
                            </div>

                            <div className='form-contro'>
                                <label htmlFor='email'>Email</label>
                                <Field type='email' className='input-box' 
                                autoComplete="email"  
                                name='email'/>
                                <ErrorMessage name='email'/>
                            </div>   


                            <div className='form-contro'>
                                <label htmlFor='password'>Password</label>
                                <Field type='password' className='input-box' 
                                autoComplete="current-password"  
                                name='password'/>
                                <ErrorMessage name='password'/>
                            </div>   
                            
                            <input type='checkbox'></input><span className='rem-span'>Remember Me</span>
                            <button type='submit' className='form-submit-btn'>Register</button>
                        </Form>
                    </Formik>
                    <button type='button' className='form-btn' onClick={handleclick}>I've an Account</button>
                    
                </div>
      </ReactCardFlip>
            </div>
        </div>
        
    )
}

export default SignUp