import React, { useEffect, useState } from "react";

const LIGHTS = {
  red: "red",
  yellow: "yellow",
  green: "green",
};

const TrafficLight = () => {
  const [active, setActive] = useState(LIGHTS.green);

  useEffect(() => {
    switch (active) {
      case LIGHTS.green:
        setTimeout(() => {
          setActive(LIGHTS.yellow);
        }, 3000);
        break;
      case LIGHTS.yellow:
        setTimeout(() => {
          setActive(LIGHTS.red);
        }, 500);
        break;
      case LIGHTS.red:
        setTimeout(() => {
          setActive(LIGHTS.green);
        }, 4000);
        break;
    }
  }, [ active]);

  return (
    <div>
      <h1>Traffic Light</h1>
      <div className="wrapper">
        <div
          className="light green"
          style={active !== LIGHTS.green ? { opacity: 0.3 } : null}
        >
          1
        </div>
        <div
          className="light yellow"
          style={active !== LIGHTS.yellow ? { opacity: 0.3 } : null}
        >
          2
        </div>
        <div
          className="light red"
          style={active !== LIGHTS.red ? { opacity: 0.3 } : null}
        >
          3
        </div>
      </div>
    </div>
  );
};

export default TrafficLight;
