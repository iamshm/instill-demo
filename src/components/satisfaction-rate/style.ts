import { css } from '@emotion/css'

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const progress = css`
    position: relative;
    margin: 4px;
    float: left;
    text-align: center;
`
export const barOverflow = css`
    position: relative;
    overflow: hidden;
    width: 250px;
    height: 125px;
    margin-bottom: -14px;
`

export const bar = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 15px solid #4a4de6;
    border-bottom-color: #eaeafd;
    border-right-color: #eaeafd;
`
export const borderBar = css`
    position: absolute;
    top: 25px;
    left: 25px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 3px dashed #4a4de6;
`
export const textContainer = css`
    text-align: center;
    margin-top: -40px;
    font-size: 28px;
    font-weight: 500;
    color: #4a4de6;
    div {
        margin-bottom: -15px;
    }
    span {
        font-size: 12px;
        font-weight: 400;
        color: #1818196b;
    }
`
export const percentContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: -5px;
`
export const zeroP = css`
    margin-left: 22px;
    color: #1818196b;
    font-size: 15px;
    font-weight: 400;
`
export const hundredP = css`
    margin-right: 15px;
    color: #1818196b;
`
