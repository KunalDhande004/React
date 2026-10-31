import React from "react";

export default function Counter() {
  const [counter, setCounter] = React.useState(0);

  const increaseCount = (add = 1) => {
    setCounter((prev) => {
      const next = prev + add;

      if (next > 20) return prev;

      return next;
    });
  };

  const decreaseCount = (sub = 1) => {
    setCounter((prev) => {
      const next = prev - sub;

      if (next < 0) return prev;

      return next;
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          increaseCount(2);
        }}
      >
        Increase Count : {counter}
      </button>

      <button
        type="button"
        onClick={() => {
          decreaseCount(2);
        }}
      >
        Decrease Count : {counter}
      </button>
    </>
  );
}
