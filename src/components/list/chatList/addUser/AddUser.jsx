import { Avatar } from '../../../../assets/images'
import './addUser.css'

const AddUser = ( ) => {
  return (
    <div className='userAdd'>
      <form action="">
        <input type="text" placeholder="Search" name='username' />
        <button>Search</button>
      </form>
      <div className="user">
          <div className="detail">
            <img src={Avatar} alt="" />
            <span>Jane Doe</span>
          </div>
          <button>Add User </button>
      </div>
    </div>
  )
}

export default AddUser