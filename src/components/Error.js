import React from "react";

const Error = props => {
    return (
        <React.Fragment>
            { 
			props.error && <p className="airportInfo__error"> { props.error }</p>
		    }
        </React.Fragment>
    )
}
    


export default Error;