import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
let Home = () => {
  return (
    <div className="home">
      <Topbar />
      <Sidebar />
      <Content />
    </div>
  );
};
export default Home;
