import React from 'react';
import ShopCards01 from '../../../partials/ecommerce/ShopCards01';
import AppImage01 from '../../../images/applications-image-01.jpg';

import ContentItem from './ContentItem';

function MainContents() {
  /* Router */

  /* State */

  /* Hooks */

  /* Functions */

  /* Render */
  return (
    <div className="mt-8">
      <h2 className="text-xl leading-snug text-slate-800 font-bold mb-5">
        Video Courses
      </h2>
      <div className="grid grid-cols-12 gap-6">
        <React.Fragment>
          <ContentItem
            imgSrc={AppImage01}
            plantName="카드 1"
            price={30000}
            star={3.8}
            firstText="First Line"
            secondText="Second Line"
            thirdText="Third Line"
            fourthText="Fourth Line"
            btnText="예약"
          />
          <ContentItem
            imgSrc={AppImage01}
            plantName="카드 1"
            price={30000}
            star={3.8}
            firstText="First Line"
            secondText="Second Line"
            thirdText="Third Line"
            fourthText="Fourth Line"
            btnText="예약"
          />
          <ContentItem
            imgSrc={AppImage01}
            plantName="카드 1"
            price={30000}
            star={3.8}
            firstText="First Line"
            secondText="Second Line"
            thirdText="Third Line"
            fourthText="Fourth Line"
            btnText="예약"
          />
          <ContentItem
            imgSrc={AppImage01}
            plantName="카드 1"
            price={30000}
            star={3.8}
            firstText="First Line"
            secondText="Second Line"
            thirdText="Third Line"
            fourthText="Fourth Line"
            btnText="예약"
          />
        </React.Fragment>
      </div>
    </div>
  );
}

export default MainContents;
