import * as React from "react"

function Credi(props) {
    return (
        <svg
            className="card-img-top"
            width={70}
            height={70}
            viewBox="0 0 216 200"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            {...props}
        >
            <path
                d="M136.494 64.655c-7.902 0-14.368-6.465-14.368-14.368V21.552c0-7.903 6.466-14.368 14.368-14.368 7.903 0 14.368 6.465 14.368 14.368v28.735c0 7.903-6.465 14.368-14.368 14.368z"
                fill="none"
                stroke="#000"
                strokeWidth={14.37}
            />
            <circle cx={176.006} cy={10.776} r={10.776} />
            <circle cx={204.741} cy={61.063} r={10.776} />
            <path
                d="M208.333 7.184l-35.919 57.471M100.575 7.184H21.552c-7.903 0-14.368 6.465-14.368 14.368v114.942c0 7.903 6.465 14.368 14.368 14.368h172.414c7.902 0 14.367-6.465 14.367-14.368V86.207M35.92 107.759h14.367M79.023 107.759h14.368M122.126 107.759h14.368M165.23 107.759h14.368M7.184 35.92h93.391"
                fill="none"
                stroke="#000"
                strokeWidth={14.37}
            />
        </svg>
    )
}

export default Credi
