// Onebox.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Onebox() {
    const [threads, setThreads] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchThreads = async () => {
            const response = await fetch(
                "https://api.yourapp.com/onebox/list",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            const data = await response.json();
            setThreads(data);
        };

        fetchThreads();
    }, []);

    const handleDelete = async (threadId) => {
        await fetch(`https://api.yourapp.com/onebox/${threadId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        setThreads(threads.filter((thread) => thread.id !== threadId));
    };

    const handleReply = (threadId) => {
        navigate(`/reply/${threadId}`);
    };

    return (
        <div className="onebox">
            {threads.map((thread) => (
                <div key={thread.id}>
                    <h3>{thread.subject}</h3>
                    <button onClick={() => handleDelete(thread.id)}>
                        Delete
                    </button>
                    <button onClick={() => handleReply(thread.id)}>
                        Reply
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Onebox;
