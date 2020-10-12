import * as React from "react"

function Mapstik(props) {
    return (
        <svg
            width="3em"
            height="3em"
            viewBox="0 0 16 16"
            className="prefix__bi prefix__bi-geo-alt"
            fill="currentColor"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 003 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 008 14.58l.208-.22a31.493 31.493 0 001.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10z"
            />
            <path
                fillRule="evenodd"
                d="M8 8a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 100-6 3 3 0 000 6z"
            />
        </svg>
    )
}

export default Mapstik
