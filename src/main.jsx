import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./constans/mock";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <div>
    {/* <div>
        <h1>{restaurants[0].name}</h1>
        <h2>Menu</h2>
        <ul>
          <li>{restaurants[0].menu[0].name}</li>
          <li>{restaurants[0].menu[1].name}</li>
          <li>{restaurants[0].menu[2].name}</li>
        </ul>
        <h2>Reviews</h2>
        <ul>
          <li>{restaurants[0].reviews[0].text}</li>
          <li>{restaurants[0].reviews[1].text}</li>
        </ul>
      </div>
      <hr />
      <div>
        <h1>{restaurants[1].name}</h1>
        <h2>Menu</h2>
        <ul>
          <li>{restaurants[1].menu[0].name}</li>
          <li>{restaurants[1].menu[1].name}</li>
        </ul>
        <h2>Reviews</h2>
        <ul>
          <li>{restaurants[1].reviews[0].text}</li>
          <li>{restaurants[1].reviews[1].text}</li>
          <li>{restaurants[1].reviews[2].text}</li>
        </ul>
      </div>
      <hr />
      <div>
        <h1>{restaurants[2].name}</h1>
        <h2>Menu</h2>
        <ul>
          <li>{restaurants[2].menu[0].name}</li>
          <li>{restaurants[2].menu[1].name}</li>
          <li>{restaurants[2].menu[2].name}</li>
        </ul>
        <h2>Reviews</h2>
        <ul>
          <li>{restaurants[2].reviews[0].text}</li>
        </ul>
      </div>
      <hr />
      <div>
        <h1>{restaurants[3].name}</h1>
        <h2>Menu</h2>
        <ul>
          <li>{restaurants[3].menu[0].name}</li>
          <li>{restaurants[3].menu[1].name}</li>
        </ul>
        <h2>Reviews</h2>
        <ul>
          <li>{restaurants[3].reviews[0].text}</li>
          <li>{restaurants[3].reviews[1].text}</li>
        </ul>
      </div> */}
    {restaurants.map((i) => (
      <div>
        <h1>{i.name}</h1>
        <h2>Menu</h2>
        {i.menu.map((name) => (
          <ul>
            <li>{name.name}</li>
          </ul>
        ))}
        <h2>Reviews</h2>
        {i.reviews.map((text) => (
          <ul>
            <li>{text.text}</li>
          </ul>
        ))}
        <hr />
      </div>
    ))}
  </div>
);
