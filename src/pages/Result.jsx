import { useParams } from "react-router-dom"
import styled from "styled-components";
import RetryButton from "../components/buttons/RetryButton";
import SocialShareButton from "../components/buttons/SocialShareButton";
import { Footer, Logo } from "../components/Wrap";
// import { CandidateData } from "../data/CandidateData";
import { ResultData } from "../data/ResultData";

const ResultWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 100%;
`

const CandidateImage = styled.div`
    width: 240px;
    height: 240px;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
    background: url(${props => props.src}) center center no-repeat;
    background-size: cover;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 50%;
`

const ResultTitle = styled.p`
    font-size: 24px;
    font-family: SUIT-ExtraBold;
    font-weight: 800;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 20px;
`

const ResultText = styled.p`
    color: rgb(89, 87, 87);
    font-size: 16px;
    font-family: SUIT-Medium;
    font-weight: 500;
    word-break: keep-all;
`

export default function Result({ name, chosungSum, sequenceSum, setTotal }) {
    const { param } = useParams();

    return (
        <ResultWrap>
            <Logo />
            <CandidateImage src={ResultData[param].src} />
            <ResultTitle>{`${name}=${ResultData[param].name}`}</ResultTitle>
            <ResultText>
                {name}님은 대통령 선거에 출마했다면 {ResultData[param].name} 후보! {chosungSum}시간도 쉬지 않고 말할 수 있는 체력과 자신감이 있답니다.
                혹시 몰라요! {sequenceSum}시간 뒤에 근처 지하철역에서 "기호 {ResultData[param].id}번!"을 외치는 {name}을(를) 발견할지도?
                {name}님께 물어보세요...!
                "너, {ResultData[param].name} 지지자였어!?"
            </ResultText>
            <RetryButton to={"/"} setTotal={setTotal} />
            <SocialShareButton param={param} />
            <Footer>Copyright 2022. (주)블루프로그 All rights reserved.</Footer>
        </ResultWrap>
    )
}