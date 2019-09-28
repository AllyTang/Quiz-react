import styled from 'styled-components';

export const StyledOption = styled.p`
  position: absolute;
  left: 200px;
  width: 60%;

  &.selected {
    background: linear-gradient(to right, #74ebd5, #acb6e5) !important;
  }
  &.options {
    padding: 8px;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 100px auto 0;
  width: 1032px;
  height: 560px;
  background-color: #dcedc8;
  border: 1rem solid #ffc107;
  border-radius: 1.8rem;
  text-align: center;
  .button {
    position: absolute;
    left: 440px;
    bottom: 20px;
    display: block;
    margin: 4rem auto;
    width: 10rem;
    height: 5rem;
    color: #fff;
    border: none;
    border-radius: 5rem;
    background-color: #7c4dff;
    transition: background-color 0.5s ease;
    padding: 1rem;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.2rem;
  }
  .button:hover {
    color: #000000;
    background-color: #ffc107;
  }
  .span {
    font-size: 16px;
    font-weight: bold;
  }
`;
export const H1 = styled.h1`
  margin-top: 20px !important;
  letter-spacing: 2px;
`;

export const Transcript = styled.ul`
  width: 70%;
  margin-left: 20%;
  margin-top: 2rem;
  font-size: 20px;
  font-weight: bold;

  list-style: none;
  li {
    text-align: left;
  }
  span {
    display: inline-block;
    margin-right: 4rem;
  }
  .marker {
    color: red;
  }
`;
export const TryAgain = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  a{
    display: block;
    width: 200px;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    font-weight:bold;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    border: 2px solid #333;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all 0.35s;
  }
  span {
    position: relative;
    z-index: 2;
  }
  a:after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #ff003b;
    transition: all .35s;
  }
  
  a:hover{
    color: #fff;
  }
  
  a:hover:after{
    width: 100%;
`;

export const Swing = styled.figure`
  animation: swing ease-in-out 1s infinite alternate;
  transform-origin: center -20px;
  float: none;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  img {
    border: 5px solid #f8f8f8;
    display: block;
    position: absolute;
    left: 25%;
  }
  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid #999;
    top: -10px;
    left: 50%;
    z-index: 0;
    border-bottom: none;
    border-right: none;
    transform: rotate(45deg);
  }
  &:before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    top: -14px;
    left: 54%;
    z-index: 5;
    border-radius: 50% 50%;
    background: #000;
  }

  @keyframes swing {
    0% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-3deg);
    }
  }
`;
