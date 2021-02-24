import React from "react";
import Header from "./header";
import Photos from "./photos";

export default function Profile({ username }) {
  return (
    <>
      <Header />
      <Photos />
    </>
  );
}
