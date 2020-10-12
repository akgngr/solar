import * as React from "react"

function Phone(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="prefix__bi prefix__bi-telephone-fill"
            fill="currentColor"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M2.267.98a1.636 1.636 0 012.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 00.167.604L8.65 9.654a.636.636 0 00.604.167l2.052-.513a1.636 1.636 0 011.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 01-6.571-4.144A17.47 17.47 0 01.639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
            />
        </svg>
    )
}

export default Phone
