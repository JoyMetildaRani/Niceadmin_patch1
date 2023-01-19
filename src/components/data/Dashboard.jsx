import Widget from '../widget.jsx';
import Widgettwo from '../widgettwo.jsx';
import Widgetthree from '../widgetthree.jsx';
import Widgetfour from '../widgetfour.jsx';
import Widgetfive from '../widgetfive.jsx';
import './Dashboard.css';

const Dashboard = () =>{
    return(
        <div>
        <div className='widget'>
            <Widget/>
            <Widgettwo/>
            <Widgetthree/>
            <div className='sidewid'>
            <Widgetfour/>
            
            </div>
          

        </div>
        <div className='widgetfive'><Widgetfive/></div>
        </div>
    )
}

export default Dashboard;