import React from "react";

export interface WelcomeProps {
  name: string;
  welcomeText?: string;
}

export default function WelcomeNote(props: WelcomeProps) {
  return (
    <div className=" mb-6 text-lg ">
      <div className=" font-medium ">Hey {props.name}!</div>
      {props.welcomeText && (
        <div className=" text-sm ">{props.welcomeText}</div>
      )}
    </div>
  );
}
