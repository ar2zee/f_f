import React from "react";

const Information = props => {
    return (
        <React.Fragment>
            {
                props.identifier && <p className="airportInfo__key">Identifier: 
                <span className="airportInfo__value"> { props.identifier } </span>
                </p> 
            }
            { 
                props.name && <p className="airportInfo__key">Name: 
                <span className="airportInfo__value"> { props.name } </span>
                </p> 
            }
            { 
                props.runways && <div className="airportInfo__key">Runways:  
                <ul>{props.runways.map(runway => (
                    <li className="airportInfo__value" key={runway.name}>{runway.name}</li>
                ))}</ul>
                </div>
            }
            { 
                props.latitude && props.longitude &&<p className="airportInfo__key">Latitude/Longitude: 
                <span className="airportInfo__value"> { props.latitude}, <br/> {props.longitude }</span> </p> 
            }
        </React.Fragment>
    )
}
    


export default Information;