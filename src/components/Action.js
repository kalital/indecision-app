import React from 'react';

const Action = (props) => (
   <div>
        <button 
        className="big-button"
        onClick={props.handelPick}
        disabled={!props.hasAction}
        >
        What should I do?
        </button>
    </div>
)

export default Action;