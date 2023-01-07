import React from 'react'
import { svgProps } from "../../app.interface";

export default function ArrowTrendDownIcon(props: svgProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path
      fill={"currentColor"}
      d="M384 384H521.4L320 182.6L203.3 299.3C197.1 305.6 186.9 305.6 180.7 299.3L4.686 123.3C-1.562 117.1-1.562 106.9 4.686 100.7C10.93 94.44 21.06 94.44 27.31 100.7L192 265.4L308.7 148.7C314.9 142.4 325.1 142.4 331.3 148.7L544 361.4V224C544 215.2 551.2 208 560 208C568.8 208 576 215.2 576 224V400C576 408.8 568.8 416 560 416H384C375.2 416 368 408.8 368 400C368 391.2 375.2 384 384 384L384 384z"
    />
  </svg>
  )
}
