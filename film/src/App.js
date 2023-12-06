import React from 'react';
import './App.css';
import MovieCard from './MovieCard';
import moviesData from './movies';
import useFilter from './useFilter';
import ReactStars from 'react-stars';
import FormModal from './FormModal';
import Modal from 'react-modal';

function App() {
  Modal.setAppElement("#root")

  const {movies, setMovies, titleFilter, minStarsFilter, setTitleFilter, setMinStarsFilter,
} = useFilter(moviesData);


  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleStarsChange = (newRating) => {
    setMinStarsFilter(newRating);
  };

  const addHandler = (newMovie) => {
    console.log(newMovie);
    setMovies([...movies, newMovie]);
  }

  return (
    <div className='App'>
      <h1>List of Movies</h1>

      <div>
        <label>
          Title:
          <input type='text' value={titleFilter} onChange={handleTitleChange} />
        </label>
        <label>
          
          <ReactStars
            count={5}
            value={minStarsFilter || 0}
            onChange={handleStarsChange}
            size={24}
            color2={'#ffd700'}
          />
        </label>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>

      <FormModal addHandler={addHandler}/>
    </div>


  );
}




export default App;