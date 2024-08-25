import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CustomEditor({ onSave, onAddVariable }) {
    return (
        <ReactQuill
            modules={{
                toolbar: {
                    container: [
                        [{ header: "1" }, { header: "2" }, { font: [] }],
                        [{ size: [] }],
                        ["bold", "italic", "underline"],
                        ["link", "image", "video"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["clean"],
                        ["save"], // Custom button
                        ["variables"], // Custom button
                    ],
                    handlers: {
                        save: onSave,
                        variables: onAddVariable,
                    },
                },
            }}
        />
    );
}

export default CustomEditor;
