import React from 'react'
import Button from '../Button'
import loginImg from '../../photo16.svg'




 export class Register extends React.Component {

    // constructor(props) {
    //   super(props)
    // }
  render() {
    return (
      <div className='base-container' ref={this.props.containerRef}>
          <div className='header'>Register</div>
          <div className='content'>
              <div className='image'>
                  <img src={loginImg} alt='icon'></img>
              </div>
              <div className='form'>
                  <div className='form-group'>
                      <label htmlFor='username'>Username</label>
                      <input type='text' name='Username' placeholder='username'></input>
                  </div>
                  <div className='form-group'>
                      <label htmlFor='email'>Email</label>
                      <input type='email' name='Email' placeholder='email'></input>
                  </div>
                  <div className='form-group'>
                      <label htmlFor='password'>Password</label>
                      <input type='password' name='Password' placeholder='password'></input>
                  </div>
              </div>

          </div>

          <div className='footer'>
              <Button NameClass='btn1' name='Register'></Button>
              <Button NameClass='btn2' name= 'Cancel'></Button>
          </div>

        </div>
    );
  }
}
