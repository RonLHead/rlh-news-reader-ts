import { FC } from 'react';
import { isPropertySignature } from 'typescript';
import './Header.css';

interface HeaderProps {
  getSection: (section:string) => void;
}

const Header: FC<HeaderProps> = ({ getSection }) => {

  return (
    <header className='Header'>
      <h1 className='Header-title'>NYT News Reader</h1>
      <nav className='Nav'>
        <h2 className='home'>Home</h2>
        <form>
          <select className='section-select' onChange={e => getSection(e.target.value)}>
            <option value="" disabled selected hidden key='default'>Filter by Category:</option>
            <option value='home' key='all'>All</option>
            <option value='arts'>Arts</option>
            <option value='automobiles'>Automobiles</option>
            <option value='books'>Books</option>
            <option value='business'>Business</option>
            <option value='fashion'>Fashion</option>
            <option value='food'>Food</option>
            <option value='health'>Health</option>
            <option value='insider'>Insider</option>
            <option value='magazine'>Magazine</option>
            <option value='nyregion'>NY Region</option>
            <option value='obituaries'>Obituaries</option>
            <option value='opinion'>Opinion</option>
            <option value='politics'>Politics</option>
            <option value='realestate'>Real Estate</option>
            <option value='Science'>Science</option>
            <option value='Sports'>Sports</option>
            <option value='sundayreview'>Sunday Review</option>
            <option value='technology'>Technology</option>
            <option value='theater'>Theater</option>
            <option value='t-magazine'>T-Magazine</option>
            <option value='upshot'>Upshot</option>
            <option value='us'>U.S.</option>
            <option value='world'>World</option>
          </select>
        </form>
        <input type='text' placeholder='Search' className='search' />
      </nav>
    </header>
  )
}

export default Header;