import './widgetfour.css';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

const Widgetfour = () =>{
    return(
                <div className="card-body">
                  <h5 className="card-title">Recent Activity <span>| Today</span></h5>
                  <div className="activity">
                    <div className="activity-item d-flex">
                      <div id="one" className="activite-label">32 min</div>
                      <i id="two" className="bi bi-circle-fill activity-badge text-success align-self-start"><FiberManualRecordOutlinedIcon style={{fontSize:"small"}}/></i>
                      <div id = "three" className="activity-content">
                        Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
                      </div>
                    </div>{/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div id="one" className="activite-label">56 min</div>
                      <i id="two" className="bi bi-circle-fill activity-badge text-success align-self-start"><FiberManualRecordOutlinedIcon style={{fontSize:"small"}}/></i>
                      <div id="three" className="activity-content">
                        Voluptatem blanditiis blanditiis eveniet
                      </div>
                    </div>{/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div id = "one"className="activite-label">2 hrs</div>
                      <i id="two" className="bi bi-circle-fill activity-badge text-success align-self-start"><FiberManualRecordOutlinedIcon style={{fontSize:"small"}}/></i>
                      <div id="three" className="activity-content">
                        Voluptates corrupti molestias voluptatem
                      </div>
                    </div>{/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div id="one" className="activite-label">1 day</div>
                      <i id="two" className="bi bi-circle-fill activity-badge text-success align-self-start"><FiberManualRecordOutlinedIcon style={{fontSize:"small"}}/></i>
                      <div id="three" className="activity-content">
                        Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
                      </div>
                    </div>{/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div id="one" className="activite-label">2 days</div>
                      <i id="two" className="bi bi-circle-fill activity-badge text-success align-self-start"><FiberManualRecordOutlinedIcon style={{fontSize:"small"}}/></i>
                      <div id="three" className="activity-content">
                        Est sit eum reiciendis exercitationem
                      </div>
                    </div>{/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div id="one" className="activite-label">4 weeks</div>
                      <i id="two" className="bi bi-circle-fill activity-badge text-success align-self-start"><FiberManualRecordOutlinedIcon style={{fontSize:"small"}}/></i>
                      <div id="three" className="activity-content">
                        Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                      </div>
                    </div>
                  </div>
                </div>
              
    )
            }
        


export default Widgetfour;