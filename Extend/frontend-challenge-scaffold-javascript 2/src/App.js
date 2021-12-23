// import styled from '@emotion/styled' // if you want to use styled components, this is in the packages

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
  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
