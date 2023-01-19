import { NewSidebarData } from "./newsidedata";
import './newside.css';
import { useState } from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function NewSidebar({query}){
    const [opendown, setOpendown] = useState(false);
    const [openup, setOpenup] = useState(true);
    const [numup,setNumup] = useState(0);
    const [keys,setKeys] = useState(0);
    
    return(
        <div className={query ? "sidebar" : "sidebarlist_fal"}>
            
            <ul className="sidebarlist">
            
            {NewSidebarData.map((val,key)=>{

console.log(key,keys,openup,opendown,numup)
if(val.childrens){
            return(
                <li key = {key} 
                className='row_child'>
                   
                 <div className="row"  >
                    <div  id="icon">{val.icon}{" "}</div> 
                    <div  id="title">{val.title}</div>
                    <div  className="toggle-btn">
                        <KeyboardArrowDownIcon  key={key}
                        onClick={() => {  setOpendown(!opendown);
                            
                            (opendown && key === keys) ? setNumup(0) : setNumup(1);
                            (numup ===1 && key === keys)? setOpenup(true) : setOpenup(false);
                         
                                 setKeys(key)}}/>
                        </div>
                    </div>
                   <div  className= {( numup === 1 && key === keys  ) ? "sidebar-content-open" : "sidebar-content"} >

     
                    
                    <ul key = {key}  className="sidebarlist_child">

                       
                        
                      { val.childrens.map((value,index)=>
                      <li key = {index} className="row_child" onClick={()=>{window.location.pathname = value.link}}>
                      
                      <div id="icon_child">{value.icon}</div>
                      <div id="title_child">{value.title}</div> 
                    
                     
                      </li>
                      )} </ul>
</div> 

                </li>
             
                 
            )}
            else if(val.title === "Pages"){
                    return(
                        <div className="pages">PAGES</div>
                    )
            }
            else{
                return(
                    <li key = {key} 
                    className='row_sep'
                    onClick={()=>{window.location.pathname = val.link}}>
                  
                       
                        <div id="icon">{val.icon}{" "}</div> 
                        <div id="title">{val.title}</div>
    
    
    
                    </li>
                     
                )

            }
        })}
        
        </ul></div>
    )
}

export default NewSidebar;