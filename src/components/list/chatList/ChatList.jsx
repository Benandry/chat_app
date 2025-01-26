import { useState } from 'react'
import { Minus, Plus, Search } from '../../../assets/images'
import './chatList.css'
import Items from '../items/Items';
import AddUser from './addUser/AddUser';

const ChatList = () => {

  const  [addMode, setAddMode] = useState(false);
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src={Search} alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img src={addMode ?  Minus : Plus } alt=""  className='add' onClick={() => setAddMode(prev => !prev)}/>
      </div>
       {/* Add items component  */}
       <Items />
       <Items />
       <Items />
       <Items />
       <Items />
       <Items />
       {addMode && <AddUser />}
    </div>
  )
}

export default ChatList