import React from "react";

export default function IsLogin() {
  const accessToken = localStorage.getItem("token");
  return !!accessToken;
}
