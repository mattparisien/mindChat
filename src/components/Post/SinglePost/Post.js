import React, { useEffect, useState } from "react";
import { StyledPost } from "../styles";
import ContainerNarrow from "../../Container/ContainerNarrow";
import { useParams } from "react-router-dom";
import useAxios from "../../helpers/hooks/useAxios";
import Paragraph from "../../Paragraph/Paragraph";

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

	if (post) {
		console.log(post.body)
	}
}, [data])

	return (
		<StyledPost className='Post post-container'>
			<ContainerNarrow>
				{loading && <p>Loading...</p>}
				{post && (
					<>
						<div className='post-title'>
							<h1>{post.title}</h1>
						</div>
						<div className='post-details'>
							<div className='author-avatar'></div>
							<Paragraph className='author-name'></Paragraph>
							<Paragraph className='date'>Posted at {post.date}</Paragraph>
							<Paragraph className='read-time'></Paragraph>
						</div>
						<div className="post-body">
							<Paragraph>{post.body}</Paragraph>
						</div>
					</>
				)}
			</ContainerNarrow>
		</StyledPost>
	);
}

export default Post;
