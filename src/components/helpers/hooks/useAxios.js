import { useEffect, useState } from "react";
import axios from "axios";

export default function useAxios(url) {

 
	const [state, setState] = useState({
		error: false,
		data: null,
		loading: true,
	});

	


	useEffect(() => {

		if (!url) {
			return;
		}

		axios
			.get(url)
			.then(res => setState(prev => ({ ...prev, data: res.data })))
			.catch(err => setState(prev => ({ ...prev, error: err })))
			.finally(setState(prev => ({ ...prev, loading: false })));
	}, [url]);

	return [state.data, state.error, state.loading];
}
