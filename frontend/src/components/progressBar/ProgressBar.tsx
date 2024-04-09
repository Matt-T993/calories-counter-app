import React from 'react'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

  interface ProgressBarProps {
    percentage: number;
  }
  

const ProgressBar = ({ percentage }:ProgressBarProps) => {

  return (
<div style={{ width: 150, height: 150 }}>
           <CircularProgressbar  value={percentage} text={`${percentage}%`} />
    </div>
  )
}

export default ProgressBar