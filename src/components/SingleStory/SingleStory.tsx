import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { IStories } from '../App/App';
import './SingleStory.css';

interface HeaderProps {
  stories:IStories[];
  topStory:IStories;
}

const SingleStory: FC<HeaderProps>= ({ stories, topStory }) => {
  const { id } = useParams();
  const story = stories[Number(id)];
  let pubDate;
  let pubYear;
  let pubMoDay;

  let storyDetails;
  
  if(!story && !topStory) {
    storyDetails = <h1>Artile is loading...</h1>
  } else if(story) {
    pubDate = story.published_date.split('').reverse().splice(15, 15).reverse();
    pubYear = pubDate.slice(0, 4).join('');
    pubMoDay = pubDate.slice(5, 10).join('');

    storyDetails = (
      <div className='SingleStory-container'>
        <h1 className='SingleStory-title'>{story.title}</h1>
        <h2>{story.byline}</h2>
        <p>{pubMoDay}-{pubYear}</p>
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          <img className='SingleStory-img' alt={story.multimedia[0].caption} src={story.multimedia[0].url}/>
        </a>
        <p>{story.multimedia[0].caption}</p>
        <p className='SingleStory-abstract'>{story.abstract} To read the rest of this article, click <a 
          href={story.url} target="_blank" rel="noopener noreferrer" className="link-text">here.</a>
        </p>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <button className="back-link">Back to main page</button>
        </Link>
      </div>
    )
  } else if(!story) {
    pubDate = topStory.published_date.split('').reverse().splice(15, 15).reverse();
    pubYear = pubDate.slice(0, 4).join('');
    pubMoDay = pubDate.slice(5, 10).join('');

    storyDetails = (
      <div className='SingleStory-container'>
        <h1 className='SingleStory-title'>{topStory.title}</h1>
        <h2>{topStory.byline}</h2>
        <p>{pubMoDay}-{pubYear}</p>
        <a href={topStory.url} target="_blank" rel="noopener noreferrer">
          <img className='SingleStory-img' alt={topStory.multimedia[0].caption} src={topStory.multimedia[0].url}/>
        </a>
        <p>{topStory.multimedia[0].caption}</p>
        <p className='SingleStory-abstract'>{topStory.abstract} To read the rest of this article, click <a 
          href={topStory.url} target="_blank" rel="noopener noreferrer" className="link-text">here.</a>
        </p>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <button className="back-link">Back to main page</button>
        </Link>
      </div>
    )
  }


  return (
    <div>
      {storyDetails}
    </div>
  )
}

export default SingleStory;