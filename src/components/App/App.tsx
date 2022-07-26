import { useEffect, useState } from 'react';
import { fetchStories } from '../../apiCalls';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Stories from '../Stories/Stories';
import TopStory from '../TopStory/TopStory';
import SingleStory from '../SingleStory/SingleStory';
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
  multimedia: IMultimedia[];
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

export interface IMultimedia {
  caption: string;
  copyright: string;
  format: string;
  height: number;
  subtype: string;
  type: string;
  url: string;
  width: number;
}

function App() {
  const [stories, setStories] = useState <IStories[]>([]);
  const [section, setSection] = useState('');
  const [topStory, setTopStory] = useState <IStories>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getStories = (section:string) => {
    if(!section) {
      section='home';
    }
    fetchStories(section)
      .then(data => {
        setTopStory(data.results.shift());
        setStories(data.results);
        setIsLoading(false);
      })
      .catch(err => {
        setError('Oops, something went wrong. Please try again later.');
      })
  }

  useEffect(() => {
    getStories(section)
  }, []);

  const getSection = (section:string) => {
    setSection(section)
    getStories(section)
  }



  return (
    <main className="App">
      <header className='App-header'>
        <NavLink to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <button className='header-title' onClick={e => getSection('home')}>NYT News Reader</button>
        </NavLink>
      </header>
      <Header getSection={getSection}/>
      <Routes>
        <Route index element={<Stories stories={stories} topStory={topStory!} isLoading={isLoading} error={error} />}/>
        <Route path=':section/:id' element={<SingleStory stories={stories} topStory={topStory!} />}/>
        <Route path=':section/current_top_story' element={<SingleStory stories={stories} topStory={topStory!} />} />
      </Routes>
      
      
    </main>
  );
}

export default App;
