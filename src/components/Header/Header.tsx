import './Header.css';

const Header = () => {
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