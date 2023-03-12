import { css } from '@emotion/css'

export const container = css`
    grid-column: span 1;
    grid-row: span 1;
    background-color: white;
    border: 1px solid #e6e7e9;
    border-radius: 8px;
    max-height: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const headerContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
export const titleText = css`
    color: rgba(24, 24, 25, 0.9);
    font-weight: 500;
    font-size: 16px;
    padding-bottom: 5px;
`
export const subTitleText = css`
    font-weight: 200;
    padding-bottom: 10px;
    font-size: 14px;
    color: gba(24, 24, 25, 0.42);
`
export const footerContainer = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid #e6e7e9;
    margin: 0 -20px;
    padding: 10px 20px 0px 20px;
    span {
        font-size: 12;
        font-weight: 500;
        color: #4a4de6;
        padding-right: 5px;
        cursor: pointer;
    }
`
