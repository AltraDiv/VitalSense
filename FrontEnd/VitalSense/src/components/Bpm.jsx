import { useEffect, useState } from "react";

export default function Bpm() {
    const [data, setData] = useState({bpm: 12});


   

    const fetchData = async() => {
        await fetch("http://localhost:8111/get-data")
        .then(response => response.json())
        .then(data => setData(data))
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
            <h1 className="bpm">Bpm: {data.bpm}</h1>
        </div>
    );
}