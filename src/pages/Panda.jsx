import React, {useState, useEffect} from 'react';
import Main from '../components/section/Main';

import VideoCards from '../components/videos/VideoCards';
import { pandaData } from '../data/panda';

const Panda =()=>{
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		setTimeout(()=>{
			setLoading(false);
		},300)
	},[])
	const loadingClass = loading?'isLoading' : 'isLoaded';
  return(
    <Main
      title="팬더"
      description="팬더 유튜브 리스트"
    >
      <section className={loadingClass}>
				<h2>🐼 팬더</h2>
				<VideoCards vdoData={pandaData}/>
      </section>
    </Main>
  )
}

export default Panda