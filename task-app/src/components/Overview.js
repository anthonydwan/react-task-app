import React from "react";

function Overview(props) {
  const { currTask } = props;

 
  return (
    <div>
      <ol>
        {currTask.map((task) => (
          <li>{task} </li>
        ))}
      </ol>
    </div>
  );
}

export default Overview;
