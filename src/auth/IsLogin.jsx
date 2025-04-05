import React from "react";

export default function IsLogin() {
  const access_token = localStorage.getItem("token");
  if (access_token !== null) {
    return true;
  }
  return false;
}
