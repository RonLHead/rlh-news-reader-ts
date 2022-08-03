import ReactLoading from 'react-loading';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IStories } from '../App/App';
import TopStory from '../TopStory/TopStory';
import Error from '../Error/Error';
import './Stories.css';

interface HeaderProps {
  stories:IStories[];
  topStory:IStories;
  isLoading:boolean;
  error:string;
}

const Stories: FC<HeaderProps> = ({ stories, topStory, isLoading, error }) => {
  let storiesList;
  let errorMsg = 'Unable to load. Please try again later.';

  if(!stories.length) {
    storiesList = <h3>{error}</h3>
  } else {
    storiesList = stories.map(story => {
      return (
        <section key={stories.indexOf(story)} id={stories.indexOf(story).toString()}>
          {!story.multimedia ? (
            <Error error={errorMsg}/>
          ) : (
            <>
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
            </>
          )}
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
      {error}
      {isLoading ? (
        <ReactLoading 
          type='bubbles'
          color='gray'
          width={'10%'}
          height={'10%'}
        />
      ) : (
        <div className='story-container'>
          <h2 className='top-story-title'>Top Story</h2>
          {!topStory.multimedia ? (
            <TopStory topStory={topStory} error={errorMsg} />
          ) : (
            <Link to={`${topStory.section}/current_top_story`} style={{ textDecoration: 'none', color: 'black' }}>
              <TopStory topStory={topStory} error={errorMsg} />
            </Link>
          )}
          {storiesList}
        </div>
      )}
    </section>
  )
}

export default Stories;