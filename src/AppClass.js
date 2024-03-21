import React, { Component } from 'react'
import './App.css';
import BoxClass from './component/BoxClass';

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

export default class AppClass extends Component {
    constructor() {
        super();
        this.state = {
            userSelect: choice.rock,
            computerSelect: choice.rock,
            userResult: "",
            computerResult: "",
            userClassName: null,
            computerClassName: null
        }
    }

    play = (userChoice) => {
        let computerChoice = this.randomChoice();
        console.log("userChoice", userChoice);
        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            userResult: this.userJudgement(choice[userChoice], computerChoice),
            computerResult: this.computerJudgement(choice[userChoice], computerChoice),
            userClassName: this.className(this.userJudgement(choice[userChoice], computerChoice)),
            computerClassName: this.className(this.computerJudgement(choice[userChoice], computerChoice))
        });
    }

    userJudgement = (user, computer) => {
        if (user.name === computer.name) {
            return "TIE"
        } else if (user.name === "Rock") {
            return computer.name === "Scissors" ? "WIN" : "LOSE";
        } else if (user.name === "Scissors") {
            return computer.name === "Paper" ? "WIN" : "LOSE";
        } else if (user.name === "Paper") {
            return computer.name === "Rock" ? "WIN" : "LOSE";
        }
    }

    computerJudgement = (user, computer) => {
        if (user.name === computer.name) {
            return "TIE"
        } else if (computer.name === "Rock") {
            return user.name === "Scissors" ? "WIN" : "LOSE";
        } else if (computer.name === "Scissors") {
            return user.name === "Paper" ? "WIN" : "LOSE";
        } else if (computer.name === "Paper") {
            return user.name === "Rock" ? "WIN" : "LOSE";
        }
    }

    className = (judgement) => {
        if (judgement === "WIN") {
            return "box-win"
        } else if (judgement === "LOSE") {
            return "box-lose"
        } else {
            return "box"
        }
    }

    randomChoice = () => {
        let itemArray = Object.keys(choice);  //객체의 키값을 배열로 만들어 줌    
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
    }

    render() {
        return (
            <div>
                <div className="main">
                    <BoxClass title="You" item={this.state.userSelect} result={this.state.userResult} className={this.state.userClassName} />
                    <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.computerResult} className={this.state.computerClassName} />
                </div>
                <div className='main'>
                    <button onClick={() => this.play("scissors")}>가위</button>
                    <button onClick={() => this.play("rock")}>바위</button>
                    <button onClick={() => this.play("paper")}>보</button>
                </div>
            </div>
        )
    }
}
