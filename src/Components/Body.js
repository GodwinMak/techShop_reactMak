import React from 'react'
import  ReactDOM  from 'react-dom';
import { Login, Register } from './Login/index';
import './Body.scss';




 class Body extends React.Component {


  constructor(props) {
    super(props)
  
    this.state = {
       isLoggin: true
    };
  }

  componentDidMount(){
    //Add .right by default
    this.rightside.classList.add("right");
  }

  changeState(){
    const {isLoggin}= this.state;
    
    if(isLoggin){
      this.rightside.classList.remove("right");
      this.rightside.classList.add("left");
    }else{
      this.rightside.classList.remove("left");
      this.rightside.classList.add("right");
    }
    this.setState(prevState => ({isLoggin: !prevState.isLoggin}))
  }


  render() {
    const {close} =this.state
    const {isLoggin} = this.state;
    const current = isLoggin ? 'Register' : 'Login';
    const cuurentActive = isLoggin ? 'Login' : 'Register';
    return ReactDOM.createPortal(
      <>

          <div className='overlay'/>
          <div className='login'>
            <form className='container' >
              {isLoggin && (
              <Login containerRef={(ref) =>(this.current = ref) }/>
              )}
              {!isLoggin && (
              <Register containerRef={(ref) =>(this.current = ref) }/>
              )}
            </form>
            <RightSide 
              current={current}
              cuurentActive={cuurentActive}
              containerRef ={ref=>(this.rightside = ref)}
            onClick={this.changeState.bind(this)}/>
          </div>        
        </>,
        document.getElementById('login')
    )
  }
}

const  RightSide = props => {
  return( 
    <div 
      className='right-side' 
      ref={props.containerRef} 
      onClick={props.onClick}
    >
      <div className='inner-container'>
        <div className='text'>{props.current}</div>
      </div>
    </div>
  );
}

export default Body

