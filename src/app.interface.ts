import React from "react"

export type svgProps = {
  className?: string;
  height?: number;
  width?: number;
}

export type sessionData = {
  sessions: sessionValue;
  newUsers: sessionValue;
  bounceRate: sessionValue;
};

export type sessionValue = {
  value: number;
  trend: "UP" | "DOWN" | string;
}