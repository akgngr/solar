import * as React from "react"

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 500 500" {...props}>
      <path d="M0 0v455.73h242.704V279.691h-59.33v-71.864h59.33v-60.353c0-43.893 35.582-79.475 79.475-79.475h62.025v64.622h-44.382c-13.947 0-25.254 11.307-25.254 25.254v49.953h68.521l-9.47 71.864h-59.051V455.73H455.73V0H0z" />
    </svg>
  )
}

export default SvgComponent
