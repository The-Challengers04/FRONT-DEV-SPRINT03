import { memo } from "react";
import "./sass.scss";

function CategoryCard({ image, subtitle, legend, value, setValue }) {
  return (
    <div className="StyledCard" onClick={() => setValue(!value)}>
      <img className="Image" src={image} alt={legend} />
      <div className={`LegendBox ${value ? "isClicked" : ""}`}>
        <h2 className="Subtitle">{subtitle}</h2>
      </div>
    </div>
  );
}

export default memo(CategoryCard);