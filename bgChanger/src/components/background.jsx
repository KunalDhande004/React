import React from "react";
import { colorList } from "./colors";

function Background() {
  const [colorIndex, setColorIndex] = React.useState(0);

  return (
    <div
      className={`h-full w-full overflow-hidden rounded-xl shadow-xl p-4 grid content-end justify-center ${colorList[colorIndex].value}`}
    >
      <div className="rounded-xl px-4 py-3 bg-white size-fit mb-8 flex flex-wrap justify-center gap-3 shadow-xl/30">
        {colorList.map((color, index) => (
          <button
            key={index}
            type="button"
            className={`rounded-xl px-4 py-2 cursor-pointer text-white shadow-lg ${color.value} ${color.hoverColor}`}
            onClick={() => setColorIndex(index)}
          >
            {color.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Background;
