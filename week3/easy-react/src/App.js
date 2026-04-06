import './App.css';
import ProfileCard from './Profilecard';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px', gap: '20px' , flexWrap: 'wrap'}}>
      <ProfileCard
        name="최정환"
        age={26}
        dream="프론트엔드 개발자"
        emoji="🧑‍🚒"
        hobby="노래듣기"
        mbti="ENFP"
        selfIntroduction="안녕하세요! 저는 최정환입니다."
      />
      </div>
  );
}

export default App;
