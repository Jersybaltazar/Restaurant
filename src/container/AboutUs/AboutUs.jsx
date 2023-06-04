import React from 'react';
import {images} from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />

    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'> 
          <h1 className='headtext__cormorant'>About us</h1>
          <img src={images.spoon} alt="about_spoon"  className='spoon__img'/>
          <p className='p__opensans'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium totam quod vel inventore eum dolores reiciendis possimus? Recusandae nihil velit, aliquam veritatis cupiditate consectetur, odio libero perspiciatis rem itaque nemo.</p>
          <button type='button' className='custom__button'>Saber Mas</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history'> 
          <h1 className='headtext__cormorant'>histoia</h1>
          <img src={images.spoon} alt="about_spoon"  className=''/>
          <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut nam dolor molestiae eum harum provident adipisci odio nobis suscipit, praesentium modi iusto aperiam rem fuga laboriosam beatae, perferendis incidunt minima.</p>
          <button type='button' className='custom__button'>Saber Mas</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
