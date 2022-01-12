import React from "react";
import Puppy from "./Puppy";

export default function Puppies(props) {
  const { currPage, chunks } = props;

  return (
    <div>
      {chunks[currPage].map((pic, i) => {
        return <Puppy key={i} pic={pic} />;
      })}
    </div>
  );
}
