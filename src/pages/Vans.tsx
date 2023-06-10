import React, { useEffect } from "react";

export default function Vans() {
  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <h1>Vans page</h1>;
}
