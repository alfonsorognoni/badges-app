import React from 'react';

import './styles/PageError.css';

function PageError (props) {
    return (
        <div className="PageError">
            <p><span aria-label="cross mark" role="img">❌</span> {props.error} <span aria-label="see no evil monkey" role="img">🙈</span></p>
        </div>
    );
}

export default PageError;
