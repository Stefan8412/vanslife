import React, { useEffect, useState } from "react";

export default function Vans() {
  const [vans, setVans] = useState<any[]>([]);

  //console.log(name);
  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
  }, []);
  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-title">
      <img src={van.imageUrl} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));
  return (
    <div className="van-list-container">
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
