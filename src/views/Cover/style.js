import styled from 'styled-components'
export const WrapperBox = styled.div`
  position: relative;
  overflow:hidden;
  width: 100%;
  height: 100%;
  background: #000 url('${require('../../assets/image/bg.jpg')}');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size:100%;
  .title {
    position: absolute;
    top:80%;
    left:52%;
    transform:translateX(-50%);
    font-size:32px;
    color:#fff;
    opacity:0.7;
  }
  .start {
    position: absolute;
    bottom:100px;
    right:100px;
    width:30px;
    height:30px;
    border-radius:50%;
    background-color: #ccc;
    cursor: pointer;
    transition:all 0.5s ease;
  }
  .start:hover {
    background-color: #fff;
    box-shadow:0 0 10px #fff;
  }
  .circular {
    background-color: #fff;
    position:fixed;
    display:block;
    bottom:-1900px;
    right:-1900px;
    border-radius:50%;
    transition:all 1s ease;
    transform: scaleX(0) scaleY(0);
    height:4000px;
    width:4000px;
  }
`
