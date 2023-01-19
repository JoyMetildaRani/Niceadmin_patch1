import './widget.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const Widget = () =>{
    return(
        <div className='widget'>     
                <div>
                    <div className='left'>Sales | Today</div>
                    <div className='right'><ShoppingCartOutlinedIcon fontSize='large'/></div>
                </div>   
                <div>
                    <div className='left'><MoreHorizOutlinedIcon/></div>
                    <div className='right' style={{fontWeight:"bold"}}>145  </div>
                    <div className='righ'>12% increase</div>
                </div>  
        </div>
    )
}

export default Widget;