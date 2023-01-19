import Widget from '../widget.jsx';
import Widgettwo from '../widgettwo.jsx';
import Widgetthree from '../widgetthree.jsx';
import Widgetfour from '../widgetfour.jsx';
import Widgetfive from '../widgetfive.jsx';
import './home.css';

const Home = () =>{
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

export default Home;