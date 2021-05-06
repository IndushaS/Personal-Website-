import React from "react";

export default function Credits({ title, subtitle, dark, id }) {
  return (
    <div className={"credits" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
          <br/>
          <br/>
          <br/>
          <br/>
          

        <p>This website was built from scratch using React and Bootstrap 💻</p>
      </div>
    </div>
  );
}
