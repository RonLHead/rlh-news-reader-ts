import { useEffect, useState } from 'react';
import { fetchStories } from '../../apiCalls';
import Header from '../Header/Header';
//import topstory component
//import stories componet
//import error component
import './App.css';

function App() {
  const [stories, setStories] = useState([]);
  const [section, setSection] = useState('');

  const getStories = (section:string) => {
    if(!section) {
      section='home';
    }
    fetchStories(section)
      .then(data => {
        // console.log(data.results)
        setStories(data.results);
      })
  }

  useEffect(() => {
    getStories(section)
  }, [])

  return (
    <main className="App">
      <Header />
      <h2>Top story component goes here</h2>
      <h3>Stories go here</h3>
      <p>Story</p>
      <p>Story</p>
      <p>Story</p>
      <p>Story</p>
      <p>Story</p>
    </main>
  );
}

export default App;
