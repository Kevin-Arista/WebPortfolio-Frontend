import axios from "axios";
import { useState, useEffect } from "react"; //! IMPORT useEffect too
import apiConnection from "../config/api-connection.js";

const api = axios.create({
	baseURL: apiConnection.url,
	timeout: 1000,
	headers: { "User-Agent": "WebPortfolio/BlogsPage" },
});

function useBlogFetch() {
	const [id, setId] = useState("/"); //! DEFINE inside of main hook!
	const [data, setData] = useState(null);
	const [err, setErr] = useState(null);

	useEffect(() => {
		setId("1");
		function fetchData() {}
		api.get(`/posts/${id}`).then((req, res) => {
			console.log(req);
			console.log(res);
		});

		// return "test clean up fxn"; //! MUST return actual function no string
	}, [id]); //! MUST call our dependent variable inside list
}

export default useBlogFetch();
