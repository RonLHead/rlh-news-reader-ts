import { FC } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  getSection: (section:string) => void;
}

const Header: FC<HeaderProps> = ({ getSection }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    
      <nav className='Nav'>
        {location.pathname === '/' ? (
          <div className='Nav-wrapper'>
            <NavLink to='/' style={{ textDecoration: 'none', color: 'white' }}>
              <button className='home' onClick={e => getSection('home')}>Home</button>
            </NavLink>
            <form>
              <select id='category-select' defaultValue={'DEFAULT'} className='section-select' onChange={e => getSection(e.target.value)}>
                <option value="DEFAULT" disabled>Filter by Category:</option>  
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
          </div>
        ) : (
          <div className='Nav-go-back'>
            <button onClick={() => navigate(-1)} className='home'>Go Back</button>
          </div>
        )}
      </nav>
  )
}

export default Header;