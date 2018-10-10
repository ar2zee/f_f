import React from "react";

const Form = props => (
			<div>
				<form onSubmit={props.getWeather}>
					<input type="text" name="identifier" placeholder="Identifier..." />
					{/* <input type="text" name="country" placeholder="Country..." /> */}
					<button>Get a Data</button>
				</form>
			</div>
)

export default Form; 