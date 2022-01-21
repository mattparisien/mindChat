import React from "react";
import { StyledSearchResults } from "./styles";
import SearchResultItem from "./SearchResultItem";
import Search from "./Search";

function SearchResults({ children, searchResults }) {
	return (
		<StyledSearchResults className='search-results-container SearchResults'>
			<ul className='search-results-ul'>
				{searchResults &&
					searchResults.map((post, i) => {
						return <SearchResultItem key={i}>{post.title}</SearchResultItem>;
					})}
			</ul>
		</StyledSearchResults>
	);
}

export default SearchResults;
