import { FC } from 'react';
import './Error.css';

interface HeaderProps {
  error:string;
}
const Error: FC<HeaderProps> = ({ error }) => {
  return (
    <p className='error-text'>{error}</p>
  )
}

export default Error;