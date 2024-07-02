import React from 'react';
import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";
import { useLocation } from "react-router-dom";
import "./home.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Welcome() {
  const query = useQuery();
  const category = query.get("cat");

  return (
    <>
      <h2>Blog Articles</h2>
      <div className="home">
        <Posts category={category} />
        <Sidebar />
      </div>
    </>
  );
}

export default Welcome;
