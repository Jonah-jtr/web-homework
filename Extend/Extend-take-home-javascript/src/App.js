import React, { useEffect, useState } from "react";
import axios from "axios";
import chunk from "./utilities/chunk";
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
  const [chunks, setChunks] = useState([[], []]);
  const [currPage, setCurrPage] = useState(1);
  const chunkSize = 10;
  useEffect(() => {
    axios
      .get(IMAGES_URL)
      .then((resp) => {
        const PicturesArray = chunk(resp.data.message, chunkSize);
        setChunks(PicturesArray);
      })
      .catch((err) => {
        console.log("error in axios call", err);
      });
  }, []);

  const pageNumbers = [];
  for (let i = 0; i < chunks.length; i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrPage(pageNumber);

  return (
    <div>
      <Pagination
        paginate={paginate}
        currPage={currPage}
        pageNumbers={pageNumbers}
      />
      <Puppies currPage={currPage} chunks={chunks} chunkSize={chunkSize} />
    </div>
  );
}

export default App;
