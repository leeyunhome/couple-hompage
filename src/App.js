import React from 'react';
import './App.css';

function App() {
  const anniversary = new Date('2025-02-24');

  // 날짜 비교 시 시간 제거!
  const today = new Date();
  const startDate = new Date(anniversary.getFullYear(), anniversary.getMonth(), anniversary.getDate());
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const msPerDay = 1000 * 60 * 60 * 24;
  const daysTogether = Math.floor((todayDate - startDate) / msPerDay) + 1;

  return (
    <div className="App">
      <div className="container">
        <h1>👩‍❤️‍👨 커플 페이지</h1>
        <p className="names">👦 윤호 &nbsp; + &nbsp; 👧 수빈</p>
        <p className="days">우리가 함께한 지 <strong>{daysTogether}</strong>일째 💖</p>
        <p className="message">"어제보다 오늘 더 사랑해 💌"</p>
      </div>
    </div>
  );
}

export default App;
