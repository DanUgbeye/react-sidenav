import React from 'react'

export type WelcomeProps = {
  name: string;
  welcomeText?: string;
}

export default function WelcomeNote(props: WelcomeProps) {
  return (
    <div className=" mb-6 ">
      <div className=" font-medium text-xl ">Hey {props.name}!</div>
      {props.welcomeText && (
        <div className=" font-sm ">{props.welcomeText}</div>
      )}
    </div>
  )
}
