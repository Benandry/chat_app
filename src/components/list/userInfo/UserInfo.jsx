import { Avatar, Edit, More, Video } from '../../../assets/images'
import './userInfo.css'


const UserInfo = () => {
  return (
    <div className='userInfo'>
      <div className="user">
        <img src={Avatar} alt="" />
        <h2>John Doe </h2>
      </div>
      <div className="icons">
        <img src={More} alt="" />
        <img src={Video} alt="" />
        <img src={Edit} alt="" />
      </div>
    </div>
  )
}

export default UserInfo