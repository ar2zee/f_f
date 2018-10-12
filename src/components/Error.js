import React from "react";

const Error = props => {
    return (
        <React.Fragment>
            { 
			props.errors && <p className="airportInfo__error"> { props.errors }</p>
		    }
        </React.Fragment>
    )
}
    


export default Error;