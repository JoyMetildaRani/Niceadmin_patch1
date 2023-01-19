import './sidebar.css'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Newdash from '../newdash';
import { Button } from '@mui/material';

function Sidebar(props){
    console.log(props.dis)
    return(
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                        <GridViewOutlinedIcon />
                        Dashboard
                        </li>
                        <li className='sidebarListItem'>
                        <HorizontalSplitOutlinedIcon />
                        Components
                        <ArrowDropDownOutlinedIcon/>
                        </li>
                        <li className='sidebarListItem'>
                        <FeedOutlinedIcon />
                        Forms
                       
                        <ArrowDropDownOutlinedIcon/>
                        </li>
                        <li className='sidebarListItem'>
                        <TableChartOutlinedIcon/>
                        Tables
                        
                        <ArrowDropDownOutlinedIcon/>
                        </li>
                        <li className='sidebarListItem'>
                        <SignalCellularAltOutlinedIcon />
                        Chart
                       
                        <ArrowDropDownOutlinedIcon/>
                        </li>
                        <li className='sidebarListItem'>
                        <DiamondOutlinedIcon />
                        Icons
                        
                        <ArrowDropDownOutlinedIcon/>
                         </li>
                        <h3>PAGES</h3>
                        <li className='sidebarListItem'>
                        <Person2OutlinedIcon />
                        Profile
                        </li>
                        <li className='sidebarListItem'>
                        <HelpOutlineOutlinedIcon />
                        F.A.Q
                        </li>
                        <li className='sidebarListItem'>
                        <EmailOutlinedIcon />
                        Contact
                        </li>
                        <li className='sidebarListItem'>
                        <ListAltOutlinedIcon />
                        Register
                        </li>
                        <li className='sidebarListItem'>
                        <SignalCellularAltOutlinedIcon />
                        Login
                        </li>
                        <li className='sidebarListItem'>
                        <DiamondOutlinedIcon />
                        Error 404
                        </li>
                        <li className='sidebarListItem'>
                        <SignalCellularAltOutlinedIcon />
                        Blank
                        </li>
                       
                    </ul>
                
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar;