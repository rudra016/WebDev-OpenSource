import React, { useState } from 'react';

import './css/allshoes.css';

export default function AllShoes() {
  const [productFilter, setProductFilter] = useState([]);
  const [count, setCount] = useState(0);

  const listProducts = [
    {
      id: 1,
      name: 'Nike1',
      price: 205,
      quantity: 0,
      image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0ee119e9-fdf8-491f-97d1-9f4fc9151b84/air-max-90-shoes-kRsBnD.png',
      nature: {
        color: ['white', 'black'],
        size: ['S', 'M', 'L'],
        type: 'men-shoes'
      }
    },
    // ... rest of the products
    {
        id: 2,
        name: 'Nike2',
        price: 300,
        quantiy: 30,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/df754862-b2a4-4949-ba03-63a5567c6c3d/air-max-ap-shoes-3Rdq04.png',
        nature: {
            color: ['white', 'black', 'grey'],
            size: ['S', 'M', 'L'],
            type: 'kid-shoes'
        }
    },
    {
        id: 3,
        name: 'Nike3',
        price: 200,
        quantiy: 30,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/593fa447-31ed-4ca6-a11d-11c749d177a2/air-presto-shoes-QdhgZW.png',
        nature: {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'men-shoes'
        }
    },
    {
        id: 4,
        name: 'Nike4',
        price: 400,
        quantiy: 30,
        image: ' https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0982593d-b4f1-42af-8f45-364488d7a6ed/air-pegasus-89-shoes-XwBsjh.png',
        nature: {
            color: ['black', 'blue'],
            size: ['S', 'M', 'L'],
            type: 'men-shoes'
        }
    },
    {
        id: 5,
        name: 'Nike5',
        price: 320,
        quantiy: 30,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f983a76c-af61-4ef0-9b9e-7c434bee07dc/blazer-low-77-shoes-zHbZKq.png',
        nature: {
            color: ['brown'],
            size: ['S', 'M', 'L'],
            type: 'kid-shoes'
        }
    },
    {
        id: 6,
        name: 'Nike7',
        price: 100,
        quantiy: 30,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3ff6005-2dd2-4f18-a221-afb2da0b0d45/dunk-low-shoes-sggKLb.png',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'women-shoes'
        }
    },
  ];

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    const valueFilter = event.target.elements;

    const filteredProducts = listProducts.filter((item) => {
      // check category
      if (valueFilter.category.value !== '') {
        if (item.nature.type !== valueFilter.category.value) {
          return false;
        }
      }
      // check color
      if (valueFilter.color.value !== '') {
        if (!item.nature.color.includes(valueFilter.color.value)) {
          return false;
        }
      }
      // check name
      if (valueFilter.name.value !== '') {
        if (!item.name.includes(valueFilter.name.value)) {
          return false;
        }
      }
      // check min price
      if (valueFilter.minPrice.value !== '') {
        if (item.price < valueFilter.minPrice.value) {
          return false;
        }
      }
      //  check max price
      if (valueFilter.maxPrice.value !== '') {
        if (item.price > valueFilter.maxPrice.value) {
          return false;
        }
      }
      return true;
    });

    setProductFilter(filteredProducts);
    setCount(filteredProducts.length);
  };

  return (
    <div className='all'>
        <div className='first'>
      <div className="container">
        <form className="filter" onSubmit={handleFilterSubmit}>
          <div className="item">
            <label>Category</label>
            <select name="category">
              <option value="">---</option>
              <option value="men-shoes">Men</option>
              <option value="women-shoes">Women</option>
              <option value="kid-shoes">Kid</option>
            </select>
          </div>
          <div className="item">
            <label>Color</label>
            <select name="color">
              <option value="">---</option>
              <option value="white">white</option>
              <option value="black">black</option>
              <option value="grey">grey</option>
              <option value="blue">blue</option>
              <option value="brown">brown</option>
            </select>
          </div>
          <div className="item">
            <label>Name</label>
            <input name="name" type="text" />
          </div>
          <div className="item">
            <label>Min Price</label>
            <input name="minPrice" type="number" />
          </div>
          <div className="item">
            <label>Max Price</label>
            <input name="maxPrice" type="number" />
          </div>
          <div className="item submit">
            <button type="submit">Search</button>
          </div>
        </form>

        </div>



        <div className='second'>
        <div className="countResults">
          Found <b id="count">{count}</b> results
        </div>

        </div>

        <div className='third'>
        <div id="list">
          {productFilter.map((item) => (
            <div key={item.id} className="item">
              <img src={item.image} alt={item.name} />
              <div className="title">{item.name}</div>
              <div className="price">{item.price.toLocaleString()} $</div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
