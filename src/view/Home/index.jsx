import React from 'react';
import HeroComponent from '@/view/Home/components/HeroComponent';
import Stories from '@/view/Home/components/Stories';
import SubHeader from '@/view/Home/components/SubHeader';
import Community from '@/view/Home/components/Community';

const Home = () => {
  return (
    <div>
      <SubHeader />
      <HeroComponent />
      <hr className="divider my-6" />
      
      <Stories />
      <hr className="divider my-6" />

      <Community />
      <hr className="divider my-6" />

    </div>
  );
}

export default Home;
