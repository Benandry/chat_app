import { useState } from 'react';
import { Avatar, Camera, Emoji, Image, Info, Mic, Phone, Video } from '../../assets/images'
import './chat.css'
import EmojiPicker from 'emoji-picker-react';
const Chat = () => {

  const  [open, setOpen] = useState(false);
  const  [message, setMessage] = useState("");

  const handleClickEmoji  = e => {
   setMessage(prev => prev + e.emoji)
  }
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

      {/* Body of messages */}
      <div className="main">
        <div className="messages">
          <img src={Avatar} alt="" />
          <div className="content">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa alias aperiam aut voluptate quaerat rerum! Nisi, odit quo omnis expedita dolorem animi dolore, nesciunt quas voluptatum nobis ex officia dolor.</p>
            <span>1 min ago </span> 
          </div>
        </div>

        <div className="messages own">
          <div className="content">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa alias aperiam aut voluptate quaerat rerum! Nisi, odit quo omnis expedita dolorem animi dolore, nesciunt quas voluptatum nobis ex officia dolor.</p>
            <span>1 min ago </span> 
          </div>
        </div>

        <div className="messages">
          <img src={Avatar} alt="" />
          <div className="content">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa alias aperiam aut voluptate quaerat rerum! Nisi, odit quo omnis expedita dolorem animi dolore, nesciunt quas voluptatum nobis ex officia dolor.</p>
            <span>1 min ago </span> 
          </div>
        </div>

        <div className="messages own">
          <div className="content">
          <img src={Avatar} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa alias aperiam aut voluptate quaerat rerum! Nisi, odit quo omnis expedita dolorem animi dolore, nesciunt quas voluptatum nobis ex officia dolor.</p>
            <span>1 min ago </span> 
          </div>
        </div>
      </div>

      {/* Bottom messages  */}
      <div className="bottom">
        <div className="icons">
          <img src={Image} alt="" />
          <img src={Camera} alt="" />
          <img src={Mic} alt="" />
        </div>
        <input type="text" placeholder='Type a message' value={message} onChange={e => setMessage(e.target.value)} />
        <div className="emoji">
          <img src={Emoji} alt=""  onClick={() => setOpen(prev => !prev)}/>
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleClickEmoji} />  
          </div>
        </div>
        <button className='sendMessage'> Send</button>
      </div>
    </div>
  )
}

export default Chat