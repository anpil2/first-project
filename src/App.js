import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개 생성(타이틀, 사진, 결과)
// 2. 가위바위보 버튼 생성
// 3. 버튼 클릭 시 클릭한 값이 박스에 출력
// 4. 컴퓨터 아이템 랜덤 선택
// 5. 3 4의 결과를 가지고 승패 출력
// 6. 승패결과에따라 테두리 색 변경(승리-초록, 패배-빨강, 비기면-검정)

const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ199zJkdvZp5ESElojMXmVmfCDlaW8zdEFDg&usqp=CAU"
  },
  scissors: {
    name: "Scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VlZuo_Obgrn3s48gX_7TdAZ5-kRtTrkSCQ&usqp=CAU"
  },
  paper: {
    name: "Paper",
    img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FBAgAAOSwtbBiRdhx%2Fs-l500.jpg&type=a340"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        {/* <Box title="Computer" /> */}
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}



export default App;
