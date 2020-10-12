import * as React from "react"

function Phoneempty(props) {
    return (
        <svg
            width="3em"
            height="3em"
            viewBox="0 0 16 16"
            className="prefix__bi prefix__bi-phone"
            fill="currentColor"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z"
            />
            <path fillRule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" />
        </svg>
    )
}

export default Phoneempty
