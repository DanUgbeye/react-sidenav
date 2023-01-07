import React from 'react'
import { svgProps } from "../../app.interface";

export default function SquarePollVerticalIcon(props: svgProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
      fill={"currentColor"}
      d="M152 248V360C152 373.3 141.3 384 128 384C114.7 384 104 373.3 104 360V248C104 234.7 114.7 224 128 224C141.3 224 152 234.7 152 248zM200 152C200 138.7 210.7 128 224 128C237.3 128 248 138.7 248 152V360C248 373.3 237.3 384 224 384C210.7 384 200 373.3 200 360V152zM344 312V360C344 373.3 333.3 384 320 384C306.7 384 296 373.3 296 360V312C296 298.7 306.7 288 320 288C333.3 288 344 298.7 344 312zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
    />
  </svg>
  )
}