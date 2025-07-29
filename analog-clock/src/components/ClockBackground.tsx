import React from "react";
import './hours.css';

const Hours = () => {
    return (
        <div className="hours-wrapper">
            <div className="hours-container pos-fix layout"  style={{}}>
                <div className="hours-content" style={{ fontSize: "40px", fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center", paddingTop:"5px" }}>
                    <div className="set d-flex flex-row">
                        <div className="center" style={{paddingBottom:"5px"}}>12</div>
                    </div>
                    <div className="set flex flex-column" style={{width: "50%",paddingBottom:"35px"}}>
                        <div className="left">11</div>
                        <div className="right">1</div>
                    </div>
                    <div className="set flex flex-column" style={{width: "75%",paddingBottom:"30px"}}>
                        <div className="left">10</div>
                        <div className="right">2</div>
                    </div>
                    <div className="set flex flex-column" style={{width: "88%"}}>
                        <div className="left">9</div>
                        <div className="right">3</div>
                    </div>
                    <div className="set flex flex-column" style={{width: "75%", paddingTop:"40px"}}>
                        <div className="left">8</div>
                        <div className="right">4</div>
                    </div>
                    <div className="set flex flex-column" style={{width: "45%", paddingTop:"50px"}}>
                        <div className="left">7</div>
                        <div className="right">5</div>
                    </div>
                    <div className="set" style={{paddingTop:"5px"}}>
                        <div className="center">6</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hours;