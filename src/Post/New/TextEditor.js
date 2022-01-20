import React, { useEffect, useState, useRef, forwardRef } from "react";
import { StyledEditor } from "./styles";
import { Editor, EditorState, RichUtils } from "draft-js";

function TextEditor(props, ref) {
	const { onClick, editorState, setEditorState } = props;

	return (
		<StyledEditor onClick={onClick} className="new-post-editor">
			<Editor
				ref={ref}
				editorState={editorState}
				onChange={editorState => setEditorState(editorState)}
			/>
		</StyledEditor>
	);
}

export default forwardRef(TextEditor);
