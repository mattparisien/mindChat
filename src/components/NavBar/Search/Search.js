import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { SearchContext } from "../../../App";

function Search({ isActive, toggleSearch }) {
	const [searchText, setSearchText] = useState("");
	const [posts, setPosts] = useState(null);
	const [searchResults, setSearchResults] = useState([]);

	const hasFetchedPosts = useRef(false);

	useEffect(() => {
		if (!hasFetchedPosts.current && isActive) {
			axios
				.get(process.env.REACT_APP_API_URL + "/posts")
				.then(res => setPosts(res.data))
				.catch(err => console.log(err));
			hasFetchedPosts.current = true;
		}

		if (posts) {
			for (let post of posts) {
				if (post.title.includes(searchText)) {
					setSearchResults(prev => {
						if (Array.isArray(prev) && !prev.includes(post)) {
							return [...prev, post];
						}
					});
				}
			}
		}
	}, [searchText, isActive]);

	const updateSearchState = e => {
		setSearchText(e.target.value);
	};

	return (
		<SearchContext.Consumer>
			{searchContext => {
				return (
					<>
						<SearchBar
							isActive={searchContext.searchActive}
							toggleSearch={searchContext.toggleSearch}
							value={searchText}
							updateSearchState={updateSearchState}
						/>
						<SearchResults searchResults={searchResults} />
					</>
				);
			}}
		</SearchContext.Consumer>
	);
}

export default Search;
