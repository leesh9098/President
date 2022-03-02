import styled from "styled-components";
import LogoImage from "../images/logos.png";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 280px;
    height: 100%;
`

export const Logo = styled.div`
    width: 83px;
    height: 16px;
    background: url(${LogoImage}) center center no-repeat;
    background-size: cover;
    margin-bottom: 30px;
`

export const Footer = styled.p`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(89, 87, 87);
    font-family: SUIT-Regular;
    font-size: 12px;
    width: 100%;
    height: 48px;
    background-color: white;
`

export default function Wrap(props) {
    return (
        <Container>
            <Logo />
            {props.children}
            <Footer>Copyright 2022. (주)블루프로그 All rights reserved.</Footer>
        </Container>
    )
}