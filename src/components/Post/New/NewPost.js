import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState } from "draft-js";
import TextEditor from "./TextEditor";
import Button from "../../Button/Button";
import axios from "axios";
import { StyledContainer } from "./styles";
import useSubmit from "../../helpers/hooks/useSubmit";

export default function NewPost() {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	// const [success, setSuccess] = useState(false);
	// const [errors, setErrors] = useState(null);
	const [titleState, setTitleState] = useState("");
	const { submitData, success, error, loading } = useSubmit();

	const editor = React.useRef(null);

	function focusEditor() {
		editor.current.focus();
	}

	React.useEffect(() => {
		focusEditor();
	}, []);

	const handlePublishClick = e => {
		e.preventDefault();
		const title = titleState;
		const body = editorState.getCurrentContent();
		const author = "Matthew Parisien";

		const post = {
			title,
			body,
			author,
		};

		submitData(post);
	};

	const handleTitleChange = e => {
		setTitleState(e.target.value);
	};

	return (
		<>
			<StyledContainer className='new-post-container'>
				<div className='new-post-content'>
					<input
						value={titleState}
						name='title'
						type='text'
						onChange={handleTitleChange}
						className='new-post-title'
						placeholder='Enter a title...'
					></input>
					<TextEditor
						editorState={editorState}
						setEditorState={setEditorState}
						ref={editor}
						onClick={focusEditor}
						className='new-post-editor-container'
					/>
					{success && <p>success!</p>}
					<Button
						fill='dark'
						onClick={handlePublishClick}
						className='new-post-submit'
					>
						Publish
					</Button>
				</div>
			</StyledContainer>
		</>
	);
}
