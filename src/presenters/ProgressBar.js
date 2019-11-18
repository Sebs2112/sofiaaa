import React from "react";

export default function ProgressBar(progress) {
  console.log(progress.progress);
  var bar;
  

  switch (progress.progress) {
    case 0:
      bar =      <div
      class="progress-bar"
      role="progressbar"
      style={{width:"25%"}}
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
      break;
    case 1:
        bar =      <div
        class="progress-bar"
        role="progressbar"
        style={{width:"50%"}}
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
      break;
    case 2:
        bar =      <div
        class="progress-bar"
        role="progressbar"
        style={{width:"75%"}}
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
      break;
    case 3:
        bar =      <div
        class="progress-bar"
        role="progressbar"
        style={{width:"100%"}}
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
  }

  return (
    <div class="progress mb-4 mt-3">
      {bar}
    </div>
  );
}
