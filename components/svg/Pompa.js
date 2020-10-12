import * as React from "react"

function Pompa(props) {
    return (
        <svg
            className="card-img-top"
            height={70}
            viewBox="0 0 70 70"
            {...props}
        >
            <path
                fill="#3F3A34"
                d="M49 18c-2.897 0-5.665.894-8 2.527v-4.628A5.009 5.009 0 0045 11V7h-8V6c0-2.757-2.243-5-5-5H6C3.243 1 1 3.243 1 6v57h36v-7.826C39.449 59.255 43.904 62 49 62c7.72 0 14-6.28 14-14V32c0-7.72-6.28-14-14-14zm-8 16v-2c0-4.411 3.589-8 8-8s8 3.589 8 8v16c0 4.411-3.589 8-8 8s-8-3.589-8-8V34zm2-23c0 1.654-1.346 3-3 3h-4c-1.654 0-3-1.346-3-3V9h10v2zm-8 33H3V31h32v13zM6 3h26c1.654 0 3 1.346 3 3v1h-2.184A2.996 2.996 0 0030 5H8C6.346 5 5 6.346 5 8v14c0 1.654 1.346 3 3 3h22c1.654 0 3-1.346 3-3v-7.026a4.952 4.952 0 002 .924V29H3V6c0-1.654 1.346-3 3-3zm25 8v11a1 1 0 01-1 1H8a1 1 0 01-1-1V8a1 1 0 011-1h22a1 1 0 011 1v3zm4 50H3V46h32v15zm26-13c0 6.617-5.383 12-12 12s-12-5.383-12-12V16h2v32c0 5.514 4.486 10 10 10s10-4.486 10-10V32c0-5.514-4.486-10-10-10-3.273 0-6.175 1.588-8 4.026v-2.953A11.932 11.932 0 0149 20c6.617 0 12 5.383 12 12v16z"
            />
            <path
                fill="#3F3A34"
                d="M11 38c0-1.103.897-2 2-2h2v-2h-2c-2.206 0-4 1.794-4 4s1.794 4 4 4h10v-2H13c-1.103 0-2-.897-2-2zM25 40h2v2h-2z"
            />
            <path
                fill="#3F3A34"
                d="M19 35.5c0-.275.225-.5.5-.5h1v-2h-1c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5H27v-2h-7.5a.501.501 0 01-.5-.5zM27 19h2v2h-2zM23 19h2v2h-2zM19 19h2v2h-2z"
            />
        </svg>
    )
}

export default Pompa
