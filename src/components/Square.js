import React from "react";
import 'C:/Users/pavel/OneDrive/Рабочий стол/crst/my-app/src/App.css';
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;