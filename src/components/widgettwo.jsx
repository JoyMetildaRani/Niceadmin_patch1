import './widgettwo.css';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const Widgettwo = () =>{
    return(
        <div className='widget'>     
                <div>
                    <div className='left'>Revenue | This Month</div>
                    <div className='right'><MonetizationOnOutlinedIcon fontSize='large'/></div>
                </div>   
                <div>
                    <div className='left'><MoreHorizOutlinedIcon/></div>
                    <div className='right' style={{fontWeight:"bold"}}>$3,264  </div>
                    <div className='righ'>12% increase</div>
                </div>  
        </div>
    )
}

export default Widgettwo;