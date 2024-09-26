import {
  highPassIndicatorElm,
  indicatorTextElm,
  lowPassIndicatorElm,
  mediumPassIndicatorElm,
} from "../lib/element/element.js";
import { setStyle, setText } from "./DomOperations.js";

const updateIndicatorInTheUI = (type) => {
  switch (type) {
    case "low":
      setStyle(highPassIndicatorElm, { visibility: "hidden" });
      setStyle(mediumPassIndicatorElm, { visibility: "hidden" });
      setStyle(lowPassIndicatorElm, { visibility: "visible" });
      setText(indicatorTextElm, "Low");
      break;

    case "medium":
      setStyle(mediumPassIndicatorElm, { visibility: "visible" });
      setStyle(highPassIndicatorElm, { visibility: "hidden" });
      setStyle(lowPassIndicatorElm, { visibility: "hidden" });
      setText(indicatorTextElm, "Medium");
      break;

    case "high":
      setStyle(highPassIndicatorElm, { visibility: "visible" });
      setStyle(mediumPassIndicatorElm, { visibility: "hidden" });
      setStyle(lowPassIndicatorElm, { visibility: "hidden" });
      setText(indicatorTextElm, "Strong");
      break;

    default:
      setStyle(highPassIndicatorElm, { visibility: "hidden" });
      setStyle(mediumPassIndicatorElm, { visibility: "hidden" });
      setStyle(lowPassIndicatorElm, { visibility: "hidden" });
      setStyle(indicatorTextElm, { visibility: "hidden" });
      break;
  }
};

export default function indicator(passwordLength) {
  if (!passwordLength) {
    // empty field
    updateIndicatorInTheUI(null);
  } else if (passwordLength < 4) {
    // low indicator
    updateIndicatorInTheUI("low");
  } else if (passwordLength < 7) {
    // medium indicator
    updateIndicatorInTheUI("medium");
  } else {
    //high indicator
    updateIndicatorInTheUI("high");
  }
}
