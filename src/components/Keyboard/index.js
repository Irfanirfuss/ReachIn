import { useEffect } from "react";

function useKeyboardShortcuts(handleDelete, handleReply) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "D") {
                handleDelete();
            } else if (event.key === "R") {
                handleReply();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleDelete, handleReply]);
}

export default useKeyboardShortcuts;
