import React from "react";
import { StyledSearchBar } from "./styles";
import { SearchContext } from "../../../App";
import Close from "../../Vector/Close";
import Button from "../../Button/Button";

function SearchBar({ toggleSearch, isActive, value, updateSearchState }) {
	return (
		<StyledSearchBar className='SearchBar' isActive={isActive}>
			<div className='SearchBar__inner'>
				<input
					className='SearchBar__input'
					type='text'
					placeholder='Search MindChat'
					value={value}
					onChange={updateSearchState}
				></input>
				<div className='SearchBar__close'>
					<Button type='button' naked onClick={toggleSearch}>
						<Close />
					</Button>
				</div>
			</div>
		</StyledSearchBar>
	);
}

export default SearchBar;
