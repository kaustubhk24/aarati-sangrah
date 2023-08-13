

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

const ProjDevCards = [
  
  {
    name: 'आरती संग्रह',
    image: '',
    url: {
      page: '/category/आरती-संग्रह',
    },
    description: 
       'सर्व आरत्या'
    
  },

  {
    name: 'स्तोत्र / श्लोक संग्रह',
    image: '',
    url: {
      page: '/category/स्तोत्र--श्लोक-संग्रह',
    },
    description: 
       'सर्व स्तोत्र / श्लोक'
    
  },
  {
    name: 'अष्टक संग्रह',
    image: '',
    url: {
      page: '/category/अष्टक-संग्रह',
    },
    description: 
       'सर्व अष्टके'
    
  },
  {
    name: 'नामावली संग्रह',
    image: '',
    url: {
      page: '/category/नामावली',
    },
    description: 
       'नामावली'
    
  },
  {
    name: 'पूजा / व्रत',
    image: '',
    url: {
      page: '/category/पूजा--व्रत',
    },
    description: 
       'पूजा'
    
  },
  {
    name: 'सूक्त संग्रह',
    image: '',
    url: {
      page: '/category/सूक्त-संग्रह',
    },
    description: 
       'सूक्त'
    
  },
  {
    name: 'पोथी संग्रह',
    image: '',
    url: {
      page: '/category/पोथी',
    },
    description: 
       'पोथी'
    
  },
 
  {
    name: 'मंगलाष्टका संग्रह',
    image: '',
    url: {
      page: '/category/मंगलाष्टका',
    },
    description: 
       'मंगलाष्टका'
    
  },
 



];

interface Props {
  name: string;
  image: string;
  url: {
    page?: string;
    codepen?: string;
  };
  description: JSX.Element;
}

function ProjDevCard({ name, image, url, description }: Props) {
  return (
    <div className="col col--3 margin-bottom--lg">
      <div className={clsx('card card  cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module')}>
        <center>
        <div className={clsx('card__imge')}>
          <Link to={url.page}>
          <div className="card__body">
          <h3 className={clsx('my_card_title')}>{name}</h3>
          <p className={clsx('desc')}>{description}</p>
        </div>
          </Link>
        </div>
        </center>

       
        <div className="card__footer">
          <div className="button-group button-group--block">
          
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjDevCardsRow(): JSX.Element {
  return (
    <div className="row">
      {ProjDevCards.map((special) => (
        <ProjDevCard key={special.name} {...special} />
      ))}
    </div>
  );
}
