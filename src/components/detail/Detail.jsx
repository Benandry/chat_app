import { ArrowDown, ArrowUp, Avatar, Download } from '../../assets/images';
import './detail.css';
const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src={Avatar} alt="" />
        <h2>John Doe</h2>
        <p>Lorem ipsum dolor sit  </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src={ArrowDown} alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy and Help </span>
            <img src={ArrowDown} alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared photos </span>
            <img src={ArrowUp} alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>Photo_2024</span>
              </div>
              <img src={Download} alt="" className='icon'/>
            </div>
          </div>
        </div>


        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src={ArrowDown} alt="" />
          </div>
        </div>
        <button>Block User </button>
        <button className='logout'>Logout </button>
      </div>
    </div>
  )
}

export default Detail