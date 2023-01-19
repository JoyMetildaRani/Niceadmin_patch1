
import './newdash.css';
import '../VarelaRound-Regular.ttf';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { useState } from "react"



function Newdash({onQuery}){
    const [close, setClose] = useState(false)

   function handleinput(){
    setClose(!close);
    onQuery(close);
    // console.log(close);
   }
    

   
    return(
            <div className='topbar'>
                <div className='topbarwrapper'>
                    <div className='topLeft'>
                        <div className='topLeftIconContainer'>
                             <img className = 'image' src={require('../img/logo.png')} alt="" />
                             <span className='logo'>
                            NiceAdmin
                             </span>
                        </div>
                        <div className='topLeftIconContainer'>
                            <div className='search'>
                                <MenuOutlinedIcon style={{fontSize:"35"}} onClick={handleinput} />
                                
                                
                                <input id="searchbox" type="text" placeholder='Search'/>
                                <SearchOutlinedIcon className='searchicon'/>
                             </div>
                        </div>
                        
                    </div>
                    <div className='topRight'>
                        <div className='topBarIconContainer'>
                            <NotificationsOutlinedIcon style={{fontSize:"35"}} />
                            <span className='topIconBag'>4</span>
                        </div>
                        <div className='topBarIconContainer'>
                        <MessageOutlinedIcon style={{fontSize:"30"}} />
                        <span className='topIconBag1'>3</span>
                        </div>
                        <div className='topBarIconContainer'>
                        <img src={require('../img/profile-img.jpg')} alt='' className='topAvatar'/>
                            <div className='namecontainer'>
                                <span className='name'>K.Anderson</span>
                                <ArrowDropDownOutlinedIcon/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


    )
}

export default Newdash;