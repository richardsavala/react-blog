import React from "react";
import { Link } from "gatsby";

const index = () => {
  return (
    <>
      Hello world! Welcome to my React blog.
      <p>
        <Link to="/blog">View Blog</Link>
      </p>
      <p>
        <Link to="/account">My Account</Link>
      </p>
    </>
  );
};

export default index;
