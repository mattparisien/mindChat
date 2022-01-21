import React, { useEffect } from "react";
import { StyledPost } from "../styles";
import ContainerNarrow from "../../Container/ContainerNarrow";
import { useParams } from "react-router-dom";


function Post(props) {

	const { id } = useParams();

	useEffect(() => {
		console.log(id)
	}, [])

	return (
		<StyledPost className='Post post-container'>
			<ContainerNarrow>
				<div className='post-title'>
					<h1>First, We Make the Best Beautiful</h1>
				</div>
				<div className='post-details'>
					<div className='author-avatar'></div>
					<p className='author-name'></p>
					<p className='date'></p>
					<p className='read-time'></p>
				</div>
			</ContainerNarrow>
		</StyledPost>
	);
}

export default Post;
