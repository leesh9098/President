import React, { useEffect, useState } from "react";
import styled from "styled-components";
import countapi from "countapi-js";
import "../reset.css";
import { CandidateData } from "../data/CandidateData";
import Wrap from "../components/Wrap";
import { useNavigate } from "react-router-dom";
import { ChosungData } from "../data/ChosungData";

const Title = styled.p`
    font-family: 'Vitro_core' ,serif;
    font-size: 26px;
`

const InputName = styled.input`
    display: inline-block;
    width: 185px;
    border: 1px solid rgb(52, 55, 73);
    border-right: 0;
    padding: 14px 20px;
`

const StartButton = styled.button`
    font-family: 'SUIT-ExtraBold', serif;
    font-size: 16px;
    font-weight: 800;
    color: white;
    background: rgb(193, 2, 48);
    border: 1px solid black;
    width: 96px;
    height: 48px;
`

const NumberOfUsers = styled.p`
    font-family: 'SUIT-Regular', serif;
    font-size: 12px;
    text-align: center;
    margin-bottom: 30px;
`

const CandidateWrap = styled.div`
    width: 100%;
    overflow: scroll;
    padding: 0 0 5px 2px;
`

const CandidateArea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 440px;
    height: 80px;
`

const CandidateImageWrap = styled.div`
    width: 80px;
    height: 80px;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    background: url(${props => props.src}) center center no-repeat;
    background-size: cover;
`

export default function Home({ setName, setChosungSum, setSequenceSum, setTotal }) {
    const [hitCount, setHitcount] = useState(0);
    const [inputName, setInputName] = useState("");
    // const [strokeNumber, setStrokeNumber] = useState(0);
    // const [csNumber, setCsNumber] = useState(0);

    const navigate = useNavigate();

    const handleName = (e) => {
        setInputName(e.target.value);
    }

    const start = () => {
        if (inputName === "") {
            alert("이름을 입력해주세요");
        } else {
            const ga = 44032;
            let uni1 = inputName.charCodeAt(0) - ga;
            let uni2 = inputName.charCodeAt(1) - ga;
            let uni3 = inputName.charCodeAt(2) - ga;

            let fn1 = parseInt(uni1 / 588);
            let fn2 = parseInt(uni2 / 588);
            let fn3 = parseInt(uni3 / 588);

            // setSeparate(ChosungData[fn1].jaeum + ChosungData[fn2].jaeum + ChosungData[fn3].jaeum);
            // setStrokeNumber(ChosungData[fn1].number + ChosungData[fn2].number + ChosungData[fn3].number);
            // setCsNumber(ChosungData[fn1].id + ChosungData[fn2].id + ChosungData[fn3].id);

            setName(inputName);
            setSequenceSum(ChosungData[fn1].number + ChosungData[fn2].number + ChosungData[fn3].number);
            setChosungSum(ChosungData[fn1].id + ChosungData[fn2].id + ChosungData[fn3].id);
            setTotal(ChosungData[fn1].number + ChosungData[fn2].number + ChosungData[fn3].number + ChosungData[fn1].id + ChosungData[fn2].id + ChosungData[fn3].id);
            navigate("/loading");
        }
    }

    useEffect(() => {
        countapi.get('presidenttest', 'users')
        .then(res => setHitcount(res.value));
    }, [])

    return (
        <Wrap>
            <Title>친구가</Title>
            <Title>대선 후보라면!?</Title>
            <div style={{ display: 'flex', marginTop: '30px', marginBottom: '10px' }}>
                <InputName maxLength="3" onChange={handleName} value={inputName} placeholder="친구의 이름 입력" />
                <StartButton onClick={start}>알아보기</StartButton>
            </div>
            <NumberOfUsers>{`${hitCount}명이 참여했어요`}</NumberOfUsers>
            <CandidateWrap>
                <CandidateArea>
                    {CandidateData.map((source) => (
                        <CandidateImageWrap key={source.id} src={source.src} />
                    ))}
                </CandidateArea>
            </CandidateWrap>
        </Wrap>
    );
}