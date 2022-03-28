import React, {useState} from 'react'
import Body from './Body';
import Button from './Button'
import List from './List'
import './NavigationStyles.scss'



function Navigation(props) {
const [isLogginOpen, setIsLogginOpen] = useState(false);
 
const toggleModal = () => {
  setIsLogginOpen(!isLogginOpen)
}

  return (
    <div className='navbar'>
        <nav>
            <ul id='MenuItems'>
                <List name ='Home'></List>
                <List name= 'About'></List>
                <List name= 'Service'></List>
                <List name= 'Contacts'></List>
                <li>
                <Button NameClass='loginbtn' name= 'Sign In' clickButton={() => toggleModal()}></Button>
                {isLogginOpen ? <Body close ={toggleModal}></Body> : null}
                </li>
            </ul>
        </nav>      
    </div>
  )
}

export default Navigation