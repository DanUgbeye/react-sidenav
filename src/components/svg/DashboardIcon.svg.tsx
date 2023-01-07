import React from 'react'
import { svgProps } from "../../app.interface";

export default function DashboardIcon(props: svgProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path
      fill={"currentColor"}
      d="M310.6 150.6L109.3 352H256c17.67 0 32 14.31 32 32s-14.33 32-32 32H32c-17.67 0-32-14.31-32-32V160c0-17.69 14.33-32 32-32s32 14.31 32 32v146.8l201.4-201.4c12.5-12.5 32.75-12.5 45.25 0S323.1 138.1 310.6 150.6z"
    />
  </svg>
  )
}
