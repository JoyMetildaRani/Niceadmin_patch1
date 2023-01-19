import './widgetthree.css';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const Widgetthree = () =>{
    return(
        <div className='widget'>     
                <div>
                    <div className='left'>Customers | This Year</div>
                    <div className='right'><PeopleAltOutlinedIcon fontSize='large'/></div>
                </div>   
                <div>
                    <div className='left'><MoreHorizOutlinedIcon/></div>
                    <div className='right' style={{fontWeight:"bold"}}>1244  </div>
                    <div className='righ'>12% decrease</div>
                </div>  
        </div>
    )
}

export default Widgetthree;