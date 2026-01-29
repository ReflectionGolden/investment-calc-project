import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logoTransparent.png'

import {faGithub} from '@fortawesome/free-brands-svg-icons';

//C:\VSCode\ITOL\JavaScriptAndReact\React-Essentials\investment-calc-project\src\assets\logoTransparent.png

const Header = () => {
  return (
    <header className='text-center p-4' id="header">
      <img className='aspect-square w-60 object-contain mx-auto' src={logo} alt="Investment Calculator Logo"/>
      <h1>Investment Calculator</h1>
      <p>This is a project created as part of Module 7 of the React Essentials ITOL course, for which I have a main project at <a title='GitHub Pages site' href="https://reflectiongolden.github.io/react-essentials-site/" target='_blank'>react-essentials-site</a><a title='GitHub Repository' href="https://github.com/ReflectionGolden/react-essentials-site" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>.</p>
    </header>
  )
}

export default Header
