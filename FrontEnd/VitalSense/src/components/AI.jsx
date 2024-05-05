import { useEffect, useState } from "react";

export default function AI() {
    const [data, setAI] = useState({ai: 1});


   

    const fetchData = async() => {
        await fetch("http://localhost:8111/get-gemini")
        .then(response => response.json())
        .then(ai => setAI(ai))
        .catch(error => console.error(error));
    }

    useEffect(() => {
        // set interval to run every 1 sec
        const interval = setInterval(() => {
            fetchData();
        }, 1000);
    }, []);

    return (
        <div>
            <h1>AI: {data.ai}</h1>
        </div>
    );
}