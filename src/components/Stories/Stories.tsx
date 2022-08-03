import ReactLoading from 'react-loading';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IStories } from '../App/App';
import TopStory from '../TopStory/TopStory';
import './Stories.css';

interface HeaderProps {
  stories:IStories[];
  topStory:IStories;
  isLoading:boolean;
  error:string;
}

const Stories: FC<HeaderProps> = ({ stories, topStory, isLoading, error }) => {
  let storiesList;

  if(!stories.length) {
    storiesList = <h3>{error}</h3>
  } else {
    storiesList = stories.map(story => {
      return (
        <section key={stories.indexOf(story)} id={stories.indexOf(story).toString()}>
          <Link to={`${story.section}/${stories.indexOf(story).toString()}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className='storiesList-container'>
              <div className='storiesList-info-container'>
                <h3 className='story-title'>{story.title}</h3>
                <p className='story-abstract'>{story.abstract}</p>
                <p>{story.byline}</p>
              </div>
              {!story.multimedia ? (
                <ReactLoading 
                  type='bubbles'
                  color='gray'
                  width={'10%'}
                  height={'10%'}
                />
                ) : <img className='story-img' alt={story.multimedia[2].caption} src={story.multimedia[2].url}/>}
            </div>
          </Link>
          <hr 
            style={{
              backgroundColor: '#F1F2F2',
              border: 'none',
              borderRadius: '5px',
              height: 5,
              width: '88vw',
            }}
          />
        </section>
      )
    })
  }
  
  return (
    <section className='stories-wrapper'>
      <div className='story-container'>
        <h2 className='top-story-title'>Top Story</h2>
        {!topStory ? (
          <ReactLoading 
            type='bubbles'
            color='gray'
            width={'10%'}
            height={'10%'}
          />
        ) : (
          <Link to={`${topStory.section}/current_top_story`} style={{ textDecoration: 'none', color: 'black' }}>
            <TopStory topStory={topStory}/>
          </Link>
        )}
        {storiesList}
      </div>
    </section>
  )
}

export default Stories;