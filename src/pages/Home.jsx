import React from 'react';
import Main from '../components/section/Main';
import Today from '../components/contents/Today';
import Dogs from '../components/contents/Dogs';

import VideoSlider from '../components/videos/VideoSlider';
import { catsData } from '../data/cats';
import { dogsData } from '../data/dogs';
import { pandaData } from '../data/panda';

const Home =()=>{
  return(
    <Main
      title="메인"
      description="메인 입니다."
    >
      <Today />
      <Dogs />
      <VideoSlider videos={catsData} title="🐈 고양이들" id="cats" />
      <VideoSlider videos={dogsData} title="🐶 시츄" id="mydogs" />
      <VideoSlider videos={pandaData} title="🐼 팬더" id="panda" />
    </Main>
  )
}

export default Home