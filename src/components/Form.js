import React from "react";

const Form = props => (
			<div>
				<form onSubmit={props.getAirportData}>
					<input type="text" name="identifier" placeholder="Identifier..." />
					<button>Get a Data</button>
				</form>
			</div>
)

export default Form; 