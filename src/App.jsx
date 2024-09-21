// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState('');
    const [publicIp, setPublicIp] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:6000/api/data');
                setData(response.data.message);
                setPublicIp(response.data.publicIp);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>React and Node.js Integration</h1>
            <p>{data}</p>
            <p>Public IP: {publicIp}</p>
        </div>
    );
};

export default App;
