import React from 'react'
import { svgProps } from "../../app.interface";

export default function ClockThreeIcon(props: svgProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      fill={"currentColor"}
      d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V232H360C373.3 232 384 242.7 384 256C384 269.3 373.3 280 360 280H256C242.7 280 232 269.3 232 256V120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"
    />
  </svg>
  )
}
