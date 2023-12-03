import React from 'react';
import styled from 'styled-components';
import backgroundImg from '/Users/stillssi/Desktop/Capstone3/src/assets/tutorial_background.svg';
import { useNavigate } from 'react-router-dom';

export const Wallpaper = styled.div`
  background-image: url(${backgroundImg});
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const GuideText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 10px;
`;

export const Selectbtn = styled.button`
  background-color: #2d0f7b;
  width: 200px;
  height: 70px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  border: none;
  border-radius: 0.8rem;
  margin: 10px;
`;

const StartSelectPage = () => {
  const name = '향아';
  const navigate = useNavigate();
  const PageNavTutorial = () => {
    navigate('/tutorials');
  };
  const PageNavMypage = () => {
    navigate('/mypage');
  };
  return (
    <Wallpaper>
      <div>
        <GuideText>안녕하세요. {name}님.</GuideText>
        <div>
          <Selectbtn onClick={PageNavTutorial}>튜토리얼</Selectbtn>
          <Selectbtn onClick={PageNavMypage}>마이페이지</Selectbtn>
        </div>
      </div>
    </Wallpaper>
  );
};

export default StartSelectPage;
