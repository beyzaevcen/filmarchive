import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
function Add() {
  const [film, setFilm] = useState({
    name: "",
    desc: "",
    imdb: null,
    poster: ""
  });
const navigate = useNavigate();


  const handleChange = (e) => {
    setFilm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3306/films", film);
      navigate("/films");
    } catch (err) {
      console.log(err);
    }

  }
 


  console.log(film);
  return (
    <div className='form'>
      <h1>Add new film</h1>
      <label>
        <input type="text" placeholder="Enter a name" onChange={handleChange} name='name' />
      </label>
      <label>
        <input type="text" placeholder="Enter a description" onChange={handleChange} name='desc' />
      </label>
      <label>
        <input type="number"  placeholder="Enter a score" onChange={handleChange} name='imdb' />
      </label>
      <label>
        <input type="text" placeholder="Enter a image url" onChange={handleChange} name='poster' />
      </label>
      <button onClick={handleClick} className="addButton">Add</button>
    </div>
  );
}

export default Add;
