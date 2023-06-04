import React from 'react';
import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Percibe el nuevo sabor" />
      <h1 className='app__header-h1'>La clave del buen sabor</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        El mejor lugar para degustar de las mejores comidas par tu paladarxd  </p>
        <button type='button' className='custom__button'>Explorar el Menu</button>
    </div>
   
    <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
