import { useEffect, useState } from "react";
import axios from "axios";

export default function useSubmit() {
	const url = process.env.REACT_APP_API_URL + "/posts/new";
	const [submittedData, setSubmittedData] = useState(null);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const submitData = data => {
		setSubmittedData(data);
	};

	useEffect(() => {
		if (submittedData) {
			axios
				.post(url, submittedData)
				.then(() => setSuccess(true))
				.catch(err => setError(err))
				.finally(setLoading(false));
		}
	}, [submittedData]);

	return { submitData, success, error, loading };
}
