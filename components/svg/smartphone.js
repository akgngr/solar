import * as React from "react"

function SmartPhone(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="prefix__bi prefix__bi-phone-fill"
            fill="currentColor"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M3 2a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V2zm6 11a1 1 0 11-2 0 1 1 0 012 0z"
            />
        </svg>
    )
}

export default SmartPhone
