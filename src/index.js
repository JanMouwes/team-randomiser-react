import React from 'react';
import ReactDOM from 'react-dom';
import TeamRandomiserCard from "./TeamRandomiserCard";

ReactDOM.render(
    <React.StrictMode>
        <div className="bg-dark" style={{height:"100vh", paddingTop:"20%"}}>
            <TeamRandomiserCard className="mx-auto align-middle" />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
