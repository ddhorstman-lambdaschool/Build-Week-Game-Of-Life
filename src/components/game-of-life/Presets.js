import React from "react";
import presetDescriptions from "./presetDescriptions";
import Preset from "./Preset";
export default function Presets(props) {
  let [currentPreset, setCurrentPreset] = React.useState(
    Object.keys(presetDescriptions)[0]
  );
  return (
    <div className='Presets'>
      <h3>Presets:</h3>
      <nav>
        {Object.entries(presetDescriptions).map(([key, category]) => (
          <button
            key={key}
            className={key === currentPreset ? "category active" : "category"}
            onClick={() => setCurrentPreset(key)}
          >
            {category.name}
          </button>
        ))}
      </nav>

      {presetDescriptions[currentPreset].items.map(p => (
        <Preset key={p.name} loadPreset={props.loadPreset} {...p} />
      ))}
    </div>
  );
}
