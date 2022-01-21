import React from "react";

function SearchResultItem({children}) {
	return (
		<li className='search-results__item'>
			<a href='#'>{children}</a>
		</li>
	);
}

export default SearchResultItem;
