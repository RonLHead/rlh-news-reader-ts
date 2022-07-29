import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { IStories } from '../App/App';
import './SingleStory.css';

interface HeaderProps {
  stories:IStories[];
}

const SingleStory: FC<HeaderProps>= ({ stories }) => {
  const { id } = useParams();
  const story = stories[Number(id)];
  let pubDate;
  let pubYear;
  let pubMoDay;

  let storyDetails;
  
  if(!story) {
    storyDetails = <h1>Artile is loading...</h1>
  } else {
    pubDate = story.published_date.split('').reverse().splice(15, 15).reverse();
    pubYear = pubDate.slice(0, 4).join('');
    pubMoDay = pubDate.slice(5, 10).join('');

    storyDetails = (
      <div>
        <h1>{story.title}</h1>
        <h2>{story.byline}</h2>
        <p>{pubMoDay}-{pubYear}</p>
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          <img className='SingleStory-img' alt={story.multimedia[0].caption} src={story.multimedia[0].url}/>
        </a>
        <p>{story.multimedia[0].caption}</p>
        <p>{story.abstract}</p>
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