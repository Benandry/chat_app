import './items.css';
import { Avatar } from "../../../assets/images"

const Items = () => {
  return (
    <div className="items">
        <img src={Avatar} alt="" />
        <div className="text-info">
            <span>Jane Doe</span>
            <p>Hello world</p>
        </div>
    </div>
  )
}

export default Items