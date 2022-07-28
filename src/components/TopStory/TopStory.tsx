import ReactLoading from 'react-loading';
import { FC } from 'react';
import { IStories } from '../App/App';
import './TopStory.css';

interface HeaderProps {
  topStory:IStories;
}

const TopStory: FC<HeaderProps> = ({ topStory }) => {
  
  let topStoryDisplay;
  if(!topStory) {
    topStoryDisplay=<p>No top story</p>
  } else {
    topStoryDisplay = (
      <section className='TopStory-container'>
        <img className='TopStory-img' alt={topStory.multimedia[1].caption} src={topStory.multimedia[1].url} />
        <div className='TopStory-info-contianer'>
          <h2 className='TopStory-title'>{topStory.title}</h2>
          <p className='TopStory-abstract'>{topStory.abstract}</p>
          <p>{topStory.byline}</p>
        </div>
      </section>
    )
  }
  

  
  return (
    <>
      {topStoryDisplay}
      <hr 
        style={{
          backgroundColor: '#F1F2F2',
          border: 'none',
          borderRadius: '5px',
          height: 5,
          width: '88vw',
        }}
        className='grayline'
      />
    </>
  )
}

export default TopStory;