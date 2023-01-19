import React from "react"
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

import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

export const NewSidebarData = [
{
    title:"Dashboard",
    icon: <GridViewOutlinedIcon/>,
    link:"/"
},
{
    title:"Components",
    icon: <HorizontalSplitOutlinedIcon/>,
    "childrens": [
        {
            "title": "Alerts",
            "icon":<PlayArrowOutlinedIcon/>,
            "link": "/alerts"
        },
        {
            "title": "Accordion",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/accordion"
        },
        {
            "title": "Badges",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/badges"
        },
        {
            "title": "Breadcrumbs",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/breadcrumbs"
        },
        {
            "title": "Buttons",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/buttons"
        },
        {
            "title": "Cards",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/Cards"
        },
        {
            "title": "Carousel",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/carousel"
        },
        {
            "title": "List Group",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/listgroup"
        },
        {
            "title": "Modal",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/modal"
        }, 
        {
            "title": "Tabs",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/tabs"
        },
        {
            "title": "Pagination",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/pagination"
        },
        {
            "title": "Progress",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/progress"
        },
        {
            "title": "Spinners",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/spinners"
        },
        {
            "title": "Tooltips",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/tooltips"
        }

       
    ]
},
{
    title:"Forms",
    icon: <FeedOutlinedIcon/>,
    "childrens": [
        {
            "title": "Form Elements",
            "icon":<PlayArrowOutlinedIcon/>,
            "link": "/formelements"
        },
        {
            "title": "Form Layouts",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/formlayouts"
        },
        {
            "title": "Form Editors",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/formeditors"
        },
        {
            "title": "Form Validation",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/formvalidation"
        }
    ]
},
{
    title:"Tables",
    icon: <TableChartOutlinedIcon/>,
    "childrens": [
        {
            "title": "General Tables",
            "icon":<PlayArrowOutlinedIcon/>,
            "link": "/generaltables"
        },
        {
            "title": "Data Tables",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/datatables"
        }
    ]
},
{
    title:"Chart",
    icon: <SignalCellularAltOutlinedIcon/>,
    "childrens": [
        {
            "title": "Chart.js",
            "icon":<PlayArrowOutlinedIcon/>,
            "link": "/chart"
        },
        {
            "title": "Apex Chart",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/apexchart"
        },
        {
            "title": "EChart",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/echart"
        }
    ]
},
{
    title:"Icons",
    icon: <DiamondOutlinedIcon/>,
    "childrens": [
        {
            "title": "Bootstrap Icons",
            "icon":<PlayArrowOutlinedIcon/>,
            "link": "/bootstrapicons"
        },
        {
            "title": "Remix Icons",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/remixicons"
        },
        {
            "title": "Boxicons",
            "icon": <PlayArrowOutlinedIcon/>,
            "link": "/boxicons"
        }
    ]
},
{
    title:"Pages",
    
},         
{
    title:"Profile",
    icon: <Person2OutlinedIcon/>,
    link:"/profile"
},
{
    title:"F.A.Q",
    icon: <HelpOutlineOutlinedIcon/>,
    link:"/faq"
},
{
    title:"Contact",
    icon: <EmailOutlinedIcon/>,
    link:"/contact"
},
{
    title:"Register",
    icon: <ListAltOutlinedIcon/>,
    link:"/register"
},
{
    title:"Login",
    icon: <SignalCellularAltOutlinedIcon/>,
    link:"/login"
},
{
    title:"Error 404",
    icon: <DiamondOutlinedIcon/>,
    link:"/error404"
},
{
    title:"Blank",
    icon: <SignalCellularAltOutlinedIcon/>,
    link:"/blank"
}

]