import React from "react";

export default function Puppies({ pictures, loading }) {
  if (loading) {
    return <h1>Loading... please wait...</h1>;
  }

  return (
    <div className="puppy-container">
      {pictures.map((picture) => {
        return <img src={picture} alt="dog" className="single-picture" />;
      })}
    </div>
  );
}
