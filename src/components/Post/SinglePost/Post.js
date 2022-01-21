import React, { useEffect, useState } from "react";
import { StyledPost } from "../styles";
import ContainerNarrow from "../../Container/ContainerNarrow";
import { useParams } from "react-router-dom";
import useAxios from "../../helpers/hooks/useAxios";

function Post(props) {
	//Get post id in url param
	const { id } = useParams();
	const [data, error, loading] = useAxios(
		process.env.REACT_APP_API_URL + `/posts/${id}`
	);
	const [post, setPost] = useState(null);

useEffect(() => {
	if (data) {
		setPost(data[0])
	}
}, [data])

	return (
		<StyledPost className='Post post-container'>
			<ContainerNarrow>
				{post && (
					<>
						<div className='post-title'>
							<h1>{post.title}</h1>
						</div>
						<div className='post-details'>
							<div className='author-avatar'></div>
							<p className='author-name'></p>
							<p className='date'>Posted at {post.date}</p>
							<p className='read-time'></p>
						</div>
						<div className="post-body">
							<p>{post.body}</p>
						</div>
					</>
				)}
			</ContainerNarrow>
		</StyledPost>
	);
}

export default Post;
