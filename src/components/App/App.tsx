import { useEffect, useState } from 'react';
import { fetchStories } from '../../apiCalls';
import Header from '../Header/Header';
//import topstory component
//import stories componet
//import error component
import './App.css';

export interface IStories {
  abstract: string;
  byline: string;
  created_date: string;
  des_facet: string[];
  geo_facet: string[];
  item_type: string;
  kicker: string;
  material_type_facet: string;
  multimedia: object[];
  org_facet: string[];
  per_facet: string[];
  published_date: string;
  section: string;
  short_url: string;
  subsection: string;
  title: string;
  updated_date: string;
  uri: string;
  url: string;
}

function App() {
  const [stories, setStories] = useState <IStories[]>([]);
  const [section, setSection] = useState('');

  const getStories = (section:string) => {
    if(!section) {
      section='home';
    }
    fetchStories(section)
      .then(data => {
        setStories(data.results);
      })
  }

  useEffect(() => {
    getStories(section)
  }, []);

  const getSection = (section:string) => {
    setSection(section)
  }

  return (
    <main className="App">
      <Header stories={stories} getSection={getSection}/>
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
