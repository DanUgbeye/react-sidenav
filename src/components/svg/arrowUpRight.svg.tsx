import React from 'react'
import { svgProps } from "../../app.interface";

export default function ArrowUpRightIcon(props: svgProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path
      fill={"currentColor"}
      d="M320 128v224c0 17.69-14.33 32-32 32s-32-14.31-32-32V205.3l-201.4 201.4C48.38 412.9 40.19 416 32 416s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L210.8 160H64C46.33 160 32 145.7 32 128s14.33-32 32-32h224C305.7 96 320 110.3 320 128z"
    />
  </svg>
  )
}
