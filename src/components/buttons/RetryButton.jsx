import { Link } from "react-router-dom";
import styled from "styled-components";
import RetryButtonImage from "../../images/btn_retry.png";

const RetryBtn = styled.button`
    position: absolute;
    bottom: 48px;
    right: 74px;
    background: url(${RetryButtonImage}) center center no-repeat;
    background-size: cover;
    width: 64px;
    height: 64px;
    border: none;
    border-radius: 50%;
`

export default function RetryButton({ to, setTotal }) {
    return (
        <>
            {to ?
                <Link to={to} style={{ width: 'auto' }}>
                    <RetryBtn onClick={() => setTotal(0)} />
                </Link> :
                <RetryBtn onClick={() => setTotal(0)} />
            }
        </>
    )
}