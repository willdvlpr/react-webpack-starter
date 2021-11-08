import React from "react";

const Home = (): JSX.Element => {
  return (
    <div>
      {/* Test Render */}
      <p>Running on port 3001...</p>
      {/* Test Image */}
      <img
        src="/public/images/github-test-image.jpg"
        width="100px"
        height="100px"
      />
    </div>
  );
};

export default Home;
