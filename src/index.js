import React from 'react';
import ReactDOM from 'react-dom';
import TeamRandomiserCard from "./TeamRandomiserCard";
import TeamRandomiserBlock from "./TeamRandomiserBlock";

ReactDOM.render(
    <React.StrictMode>
        <div className="bg-dark p-3">
            <TeamRandomiserBlock className="m-1"/>
            <TeamRandomiserCard className="m-1"/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
