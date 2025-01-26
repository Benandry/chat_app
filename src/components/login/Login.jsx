import { useState } from 'react';
import './login.css';
import { Avatar } from '../../assets/images';
import { toast } from 'react-toastify';


const Login = () => {
    const  [avatar, setAvatar] = useState({
      file: null,
      url: "",
    });

    const handleAvatarChange = (e) => {
      if(e.target.files[0]) {
          const file = e.target.files[0];
          const url = URL.createObjectURL(file);
          setAvatar({
            file: file,
            url: url,
          });
      }
    };

    const handleLogin = e => {
      e.preventDefault();
      toast.success(<h2>Welcome back,</h2>);
    }

  

  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome back,</h2>
        <form action="" onSubmit={handleLogin}>
          <input type="email" placeholder='Email' name='email' />
          <input type="password" placeholder='Password' name='password' />
          <button>Sign in</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
          <h2>Create account </h2>
          <form action="">
            <label htmlFor="file">
              <img src={avatar.url || Avatar} alt="" />
              Insert an image  </label>
            <input type="file" id='file' style={{display: "none"}} onChange={handleAvatarChange}  />
            <input type="text" placeholder='Username' name='username' />
            <input type="email" placeholder='Email' name='email' />
            <input type="password" placeholder='Password' name='password' />
            <button>Sign up </button>
          </form>

      </div>
    </div>
  )
}

export default Login