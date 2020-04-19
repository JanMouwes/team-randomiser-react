import React from 'react';
import ReactDOM from 'react-dom';
import TeamRandomiser from './TeamRandomiser';

ReactDOM.render(
    <React.StrictMode>
        <div className="bg-dark p-3">
            <TeamRandomiser/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
