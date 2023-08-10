import { FunctionComponent, useState } from 'react';
import Searchbar from './main-screen/1F-searh/Searchbar';
import Linkbars from './main-screen/2F-hashbars/Linkbars';
import MainSquares from './main-screen/3F-squares/MainSquares';
import EventRactangle from './main-screen/4F-event-rectangle/EventRactangle';
import Navbar from './main-screen/5F-navbar/Navbar';
import MyInfoManager from './main-screen/5F-navbar/MyInfoManager';
import RegisterManager from './main-screen/5F-navbar/RegisterManager';
import SignInManager from './main-screen/5F-navbar/SignInManager';

const App: FunctionComponent<{}> = () => {
  
  return (
    <div>
      <Searchbar />
      <Linkbars />
      <MainSquares />
      <EventRactangle />
      <Navbar />
      <MyInfoManager/>
      <RegisterManager/>
      <SignInManager/>
    </div>
  );
};

export default App;
