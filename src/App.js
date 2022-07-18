import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [videos, setVideos] = useState([])
  const [weather,setWeather] = useState([])

  const getMostPopularVideos = async()=>{
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key= AIzaSyBqxcm2PG_7yLTSgRAGITOOq5n8S9FyUVA`;
    const res = await fetch(url);
    const data = await res.json();
    console.log('인기동영상목록',data) 
    setVideos(data.items)
  }

  const getCurrentWeatherData = async()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.543365&lon=126.9511&appid=66347dd0c7e80afdf99ae46f6986be7c&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    console.log('날씨데이터', data)
    setWeather(data)
  }

  useEffect(()=>{
    getCurrentWeatherData();
  },[])

  useEffect(()=>{
    getMostPopularVideos();
  },[])

  
  return (
    <div className="App">
      <h1>{weather.name}</h1> {/*지역name*/}
      <h2>{weather.main.temp}도</h2> {/*temp*/}
      {
        videos.map(item=><div key={item.id}>{item.snippet.title}</div>) // 타이틀이 화면에 출력됨
      }
    </div>
  );
}

export default App;
