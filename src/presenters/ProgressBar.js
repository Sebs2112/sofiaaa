import React from "react";

export default function ProgressBar() {
  return (
    <div class="progress mb-4 mt-3">
      <div
        class="progress-bar"
        role="progressbar"
        style={{width: "25%"}}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        25%
      </div>
    </div>
  );
}
