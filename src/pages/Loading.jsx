import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Wrap from "../components/Wrap";
import { CandidateData } from "../data/CandidateData";

const CandidateImageWrap = styled.div`
    width: 80px;
    height: 80px;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    background: url(${props => props.src}) center center no-repeat;
    background-size: cover;
    margin: 0 auto;
    margin-bottom: 30px;
`

const AnalyzeName = styled.p`
    font-family: 'Vitro_core' ,serif;
    font-size: 24px;
    width: 100%;
    text-align: center;
`

const AnalyzeText = styled.p`
    color: rgb(89, 87, 87);
    font-family: 'SUIT-medium', serif;
    font-weight: 500;
    width: 110px;
    margin: 0 auto;
    margin-bottom: 10px;
`

const Line = styled.div`
    width: 100%;
    height: 1px;
    background: rgb(216, 216, 216);
    margin-bottom: 20px;
`

const ShowResultButton = styled.button`
    width: 100%;
    height: 48px;
    background: rgb(193, 2, 48);
    border-radius: 24px;
    border: none;
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-family: SUIT-ExtraBold;
    font-weight: 800;
    margin-bottom: 20px;
`

const getTotal = (t) => {
    let param;
    if (t < 41) {
        param = "result2";
    } else if (t < 42) {
        param = "result1";
    } else if (t < 44) {
        param = "result4";
    } else if (t < 45) {
        param = "result5";
    } else {
        param = "result3";
    }
    return param;
}

export default function Loading({ name, total }) {
    const [image, setImage] = useState(0);

    const navigate = useNavigate();

    const resultPage = getTotal(total);

    const updateImage = () => {
        if (image < CandidateData.length - 1) {
            setImage(image + 1);
        } else {
            setImage(0);
        }
        return image;
    }

    const ShowResult = () => {
        navigate(`/result/${resultPage}`);
    }

    useEffect(() => {
        const update = setTimeout(() => updateImage(), 700)
        return (() => clearTimeout(update))
    })

    return (
        <Wrap>
            <CandidateImageWrap src={CandidateData[image].src} />
            <AnalyzeName>{`친구 ${name}의`}</AnalyzeName>
            <AnalyzeName style={{ marginBottom: '20px' }}>이름을 분석중입니다</AnalyzeName>
            <AnalyzeText>✓ 초성 분리</AnalyzeText>
            <AnalyzeText>✓ 초성 획수 합산</AnalyzeText>
            <AnalyzeText>✓ 초성 순서 합산</AnalyzeText>
            <AnalyzeText style={{ marginBottom: '20px' }}>✓ 종합 분석</AnalyzeText>
            <Line />
            <AnalyzeText style={{ color: 'black', width: 'auto', marginBottom: "95px" }}>분석이 완료되었습니다</AnalyzeText>
            <ShowResultButton onClick={ShowResult}>결과보기</ShowResultButton>
        </Wrap>
    )
}