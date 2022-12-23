import React from 'react'
import { svgProps } from "../../app.interface";

export default function ArrowTrendUpIcon(props: svgProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path
      fill={"currentColor"}
      d="M368 112C368 103.2 375.2 96 384 96H560C568.8 96 576 103.2 576 112V288C576 296.8 568.8 304 560 304C551.2 304 544 296.8 544 288V150.6L331.3 363.3C325.1 369.6 314.9 369.6 308.7 363.3L192 246.6L27.31 411.3C21.07 417.6 10.94 417.6 4.686 411.3C-1.562 405.1-1.562 394.9 4.686 388.7L180.7 212.7C186.9 206.4 197.1 206.4 203.3 212.7L320 329.4L521.4 128H384C375.2 128 368 120.8 368 112L368 112z"
    />
  </svg>
  )
}
