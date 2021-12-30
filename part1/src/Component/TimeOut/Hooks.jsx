import React, { useState, useEffect } from "react";
import { useTimeout } from "./CustomHook";

export default function Hooks() {
  // false
  const isReady = useTimeout(2000);
  return (
    <div>
      <h3> Custom Hooks </h3>
      {isReady && "Ready"}
      {!isReady && "Not Ready"}
    </div>
  );
}
