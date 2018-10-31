import React from "react";
import "./Item.css";

function Item({ title, url }) {
  return (
    <section>
      <div>
        <a href={url} target="_blank">
          {title}
        </a>
      </div>
    </section>
  );
}

export default Item;
