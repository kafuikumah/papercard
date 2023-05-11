import React from "react";
import '../styles/Waitlist.css'

function Waitlist(props) {
    console.log(props);
    return (
        <div className="heroSection">
           <div>
                <h1 className="waitlist-heading">{props.heroHeading}</h1>
            </div>
            
            <div>
                <h2 className="waitlist-sub-heading">
                    {props.heroDescription}
                </h2>
            </div>

            <div className="waitlist-button">
                <button type="button">{props.joinWaitlistButton}</button>
                <button type="button">{props.learnMoreButton}</button>
            </div>
    
        </div>
    );
}

export default Waitlist;