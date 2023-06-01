import React, { useEffect } from "react";
import axios from "axios";

const InitialDataFetching = ({ source, setData }) => {
	axios
		.get(`http://localhost:3001/api/${source}`)
		.then((response) => {
			setData(response.data);
		})
		.catch((error) => {
			console.error(error);
		});
};

export default InitialDataFetching;
