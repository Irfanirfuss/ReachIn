// ReplyPage.js
import React, { useState } from "react";

function ReplyPage({ threadId }) {
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const handleSendReply = async () => {
        const response = await fetch(
            `https://api.yourapp.com/reply/${threadId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    from: "user@example.com",
                    to: "recipient@example.com",
                    subject,
                    body: `<html>${body}</html>`,
                }),
            }
        );

        if (response.ok) {
            alert("Reply sent!");
        } else {
            alert("Failed to send reply.");
        }
    };

    return (
        <div className="reply-page">
            <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button onClick={handleSendReply}>Send Reply</button>
        </div>
    );
}

export default ReplyPage;
