import { useState } from "react";


function ProfileCard({ name, age, dream, emoji, hobby, mbti, selfIntroduction }) {
const [likes, setLikes] = useState(0);
const [display, setDisplay] = useState(false);

function handleLike() {
  setLikes(likes + 1);
}
function handleReset() {
  setLikes(0);
}

function handleDisplay() {
  setDisplay(!display);
}



  return (
    <div style={{
      border: '2px solid #c6afe2ff',
      borderRadius: '16px',
      padding: '24px',
      width: '280px',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f1fbefff',
    }}>
      <div style={{ fontSize: '48px' }}>{emoji}</div>
      <h2>이름: {name}</h2>
      <p>나이: {age}</p>
      <p>꿈: {dream}</p>
      <p>취미: {hobby}</p>
      <p>MBTI: {mbti}</p>
      <div style={{ marginTop: '15px' }}>
        <p>❤️: {likes}</p>
        <button onClick={handleLike} style={{ marginRight: '8px' , backgroundColor: '#c6afe2ff', border: 'none', borderRadius: '8px', padding: '8px 12px', cursor: 'pointer' }}> + 좋아요</button>
        <button onClick={handleReset} style={{ marginRight: '8px' , backgroundColor: '#c6afe2ff', border: 'none', borderRadius: '8px', padding: '8px 12px', cursor: 'pointer' }}>초기화</button>
        <button onClick={handleDisplay} style={{ backgroundColor: '#c6afe2ff', border: 'none', borderRadius: '8px', padding: '8px 12px', cursor: 'pointer' }}>{display ? '숨기기' : '보이기'}</button>
        {display && <p>자기소개: {selfIntroduction}</p>}
      </div>
    </div>
  );
}

export default ProfileCard;