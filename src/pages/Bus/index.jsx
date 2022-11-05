import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styled from "styled-components"
import BoardModal from "react-modal"
import { BoardProvider } from "../../components/Navbar/Board/BoardContext"
import BoardTemplate from '../../components/Navbar/Board/BoardTemplate'
import BoardHead from '../../components/Navbar/Board/BoardHead'
import CardList from '../../components/Navbar/Board/CardList'
import BoardCreate from '../../components/Navbar/Board/BoardCreate'
import { Close } from "../../image/index.jsx"
import Card from '../../components/Navbar/Board/Card'
import BoardList from '../../components/Navbar/Board/BoardList'


const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 1350px;
  height: 890px;
  background-color: rgb(231, 235, 240);
`

const ModalHead = styled.div`
  width: 1350px;
  height: 100px;
`

const ModalBody = styled.div`
  width: 1350px;
  height: 690px;
  position: absolute;
  top: 100px;
`

const Closebtn = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

const BoardListWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0;
  animation: smoothAppear 1.5s forwards;
  animation-delay: 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  .boardList-header {
    color: black;
    font-weight: bold;
    font-size: 2.5rem;
    margin-top: 50px;
  }
  .boardList-body {
    margin-top: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`

const index = ({ isModal, setModal }) => {
    return (
        <div>
            <h1>
                <Navbar
                    nav1="기숙사"
                    nav2="버스" />
            </h1>
            <div>
                <ModalHead>
                    <Closebtn src={Close} onClick={() => setModal(false)} />
                </ModalHead>
                <ModalBody>
                    <BoardListWrapper>
                        <div className="boardList-header">버스 게시물 📝</div>
                        <div className="boardList-body" />
                    </BoardListWrapper>
                </ModalBody>
            </div>
            <div>
                <BoardTemplate>
                    <Card
                        address="bus"
                        board_id={0}
                        img_url=""
                        title="첫 번째 게시물"
                        content={"테스트용 게시물입니다."}
                        username="김아린"
                        date={20221029}
                    />
                    <Card
                        board_id={1}
                        img_url=""
                        title="두 번째 게시물"
                        content={"테스트용 게시물입니다."}
                        username="김아린"
                        date={20221030}
                    />
                    
                </BoardTemplate>
            </div>

        </div>
    )
}

export default index