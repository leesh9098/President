import styled from "styled-components";
import { ResultData } from "../../data/ResultData";
import ShareButtonImage from "../../images/btn_share.png";

const ShareBtn = styled.button`
    position: absolute;
    bottom: 48px;
    right: 0;
    background: url(${ShareButtonImage}) center center no-repeat;
    background-size: cover;
    width: 64px;
    height: 64px;
    border: none;
    border-radius: 50%;
`

export default function SocialShareButton({ param }) {
    const setResultUrl = () => {
        // let resultUrl;
        // if (currentUrl.includes('result1')) {
        //     resultUrl = 'https://trepick.page.link/result1'
        // } else if (currentUrl.includes('result2')) {
        //     resultUrl = 'https://trepick.page.link/result2'
        // } else if (currentUrl.includes('result3')) {
        //     resultUrl = 'https://trepick.page.link/result3'
        // } else if (currentUrl.includes('result4')) {
        //     resultUrl = 'https://trepick.page.link/result4'
        // } else {
        //     resultUrl = 'https://trepick.page.link/result5'
        // }
        // return resultUrl;
        return window.location.href;
    }

    const copyUrl = () => {
        if (navigator.share) {
            navigator.share({
                title: ResultData[param]['ogTitle'],
                text: ResultData[param]['ogDescription'],
                url: setResultUrl()
            })
        } else {
            alert("공유하기를 지원하지 않는 기기입니다.");
        }
    }

    return (
        <ShareBtn onClick={copyUrl} />
    )
}