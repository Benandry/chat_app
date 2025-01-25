import { Avatar, Info, Phone, Video } from '../../assets/images'
import './chat.css'
const Chat = () => {
  return (
    <div className='chat'>
      <div className="top">
          <div className="user">
            <img src={Avatar} alt="" />
            <div className="text-info">
                <span>Jane Doe</span>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="icons">
            <img src={Phone} alt="" />
            <img src={Video} alt="" />
            <img src={Info} alt="" />
          </div>
      </div>
      <div className="main"></div>
      <div className="bottom"></div>
    </div>
  )
}

export default Chat