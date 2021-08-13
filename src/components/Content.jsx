import React from "react";
import Card from "./Card";
let Content = () => {
  return (
    <div className="content">
      <div className="heading">
        <h1>
          What are you <br /> having for Lunch?
        </h1>
      </div>
      <div className="para">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto porro
          assumenda omnis explicabo unde similique pariatur.
        </p>
      </div>
      <div className="content_card_box">
        <Card
          imgSrc="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1heGljYW4lMjB0YWNvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          item="Maxican Taco"
        />

        <Card
          imgSrc="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhcm1ob3VzZSUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          item="Farmhouse Pizza"
        />
        <Card
          imgSrc="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          item="Chicken Burger"
        />
        <Card
          imgSrc="https://images.unsplash.com/photo-1568289801407-a1e2b4809aec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxsb2FkZWQlMjBuYWNob3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          item="Loaded Nachos"
        />
        <Card
          imgSrc="https://images.unsplash.com/photo-1609672655400-c509bdbcf7e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGhha2thJTIwbm9vZGxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          item="Hakka Noodles"
        />
      </div>
    </div>
  );
};
export default Content;
