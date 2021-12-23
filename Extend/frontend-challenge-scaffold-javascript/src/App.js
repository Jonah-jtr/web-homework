// import styled from '@emotion/styled' // if you want to use styled components, this is in the packages
import React, { useState, useEffect } from "react";
import axios from "axios";

import Puppies from "./components/Puppies";
import Pagination from "./components/Pagination";
const IMAGES_URL = "https://dog.ceo/api/breed/hound/images/random/55";
/**
 *
 * @returns { "message": ["https://images.dog.ceo/breeds/hound-afghan/n02088094_1126.jpg", ...] }
 *
 * Step 1: Render all the images returned
 * Step 2: Create chunks of 10 images from the returned list
 * Step 3: Render the first 10 of the list
 * Step 4: Build a way to increment to the next 10
 * Step 5: Build a way to decrement to the previous 10
 * Step 6: Create a UI that shows which page you're viewing
 * Step 7: Write a test that covers a user interaction
 *
 */

function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [picsPerPage, setPicsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dog.ceo/api/breed/hound/images/random/55")
      .then((resp) => {
        setPictures(resp.data.message);
        setLoading(false);
        console.log("hey");
      })
      .catch((err) => {
        console.log("error in axios call");
      });
  }, []);

  const indexOfLastPicture = currPage * picsPerPage;
  const indexOfFirstPicture = indexOfLastPicture - picsPerPage;
  const currentPics = pictures.slice(indexOfFirstPicture, indexOfLastPicture);

  const paginate = (pageNumber) => setCurrPage(pageNumber);

  return (
    <div>
      <header></header>
      <div>
        <Puppies pictures={currentPics} loading={loading} />
      </div>
      <Pagination
        currPage={currPage}
        picsPerPage={picsPerPage}
        totalPics={pictures.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
