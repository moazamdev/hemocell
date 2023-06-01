import Axios from "axios";

const newUsersInsertRequest = (formData, pageSource) => {
	const today = new Date();
	const formattedDate = `${today.getFullYear()}-${(
		"0" +
		(today.getMonth() + 1)
	).slice(-2)}-${("0" + today.getDate()).slice(-2)}`;

	Axios.post(`http://localhost:3001/insert-new-users`, {
		name: formData.name,
		email: formData.email,
		phone: formData.phone,
		date: formattedDate,
		source: pageSource,
		// source: window.location.href.substring(22),
	})
		.then((response) => {
			console.log("success");
			console.log(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
	console.log("success");
	console.log(formData);
};

export default newUsersInsertRequest;
