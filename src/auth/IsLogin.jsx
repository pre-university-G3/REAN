import React from "react";

export default function IsLogin() {
  const accessToken = localStorage.getItem("token");
  if (accessToken !== null) {
    return true;
  }
  return false;
}
