import React from "react";
import styled from "styled-components";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";

export default function Products() {
  const data = [
    {
      image: product1,
      name: "Chicken Burger",
      price: " RS 224",
    },
    {
      image: product2,
      name: "Toasted Bread",
      price: " Rs 155",
    },
    {
      image: product3,
      name: "Egg Sandwich",
      price: " Rs 180",
    },
    {
      image: product4,
      name: "Raspberry Cake",
      price: "Rs 250",
    },
  ];

  return (
    <Section id="products">
      <div className="title">
        {/* <h1>
          <span>Favourite</span> All the time!
        </h1> */}
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product" key={product.name}>
              <div className="image">
                <img src={product.image} alt={product.name} />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <button>Buy Now</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  // ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;

    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;

      h3 {
        color: #fc4958;
      }

      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }

      ${imageZoomEffect};

      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;

        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }

      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: black;
        text-transform: uppercase;

        &:hover {
          background: white;
          color: black;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
