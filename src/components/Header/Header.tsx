import { FC } from 'react';
import { IStories } from '../App/App';
import './Header.css';

interface HeaderProps {
  stories:IStories[];
}

const Header: FC<HeaderProps> = ({ stories }) => {
  
  return (
    <header className='Header'>
      <h1 className='Header-title'>NYT News Reader</h1>
      <nav className='Nav'>
        <h2 className='home'>Home</h2>
        <form>
          <select className='section-select'>
            <option>Filter by Category:</option>
          </select>
        </form>
        <input type='text' placeholder='Search' className='search' />
      </nav>
    </header>
  )
}

export default Header;