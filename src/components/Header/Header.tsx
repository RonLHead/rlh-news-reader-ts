import { FC } from 'react';
import { IStories } from '../App/App';
import './Header.css';

interface HeaderProps {
  stories:IStories[];
}

const Header: FC<HeaderProps> = ({ stories }) => {
  let allSections = stories.flatMap(story => story.section).reduce((storySections:string[], section) => {
    if(!storySections.includes(section)) {
      storySections.push(section);
    }
    return storySections;
  }, []);

  let sectionList = allSections.sort().map((section:string) => {
    return (
      <>
        <option value={section} key={section}>{section}</option>
      </>
    )
  })
  return (
    <header className='Header'>
      <h1 className='Header-title'>NYT News Reader</h1>
      <nav className='Nav'>
        <h2 className='home'>Home</h2>
        <form>
          <select className='section-select'>
            <option value="" disabled selected hidden key='default'>Filter by Category:</option>
            {sectionList}
          </select>
        </form>
        <input type='text' placeholder='Search' className='search' />
      </nav>
    </header>
  )
}

export default Header;