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
    justify-content: center;
    align-items: center;
`
export const imgContainer = css`
    margin-bottom: 10px;
`
export const noComponentTitle = css`
    font-weight: 500;
    color: #181819e5;
    font-size: 15px;
    padding: 10px 0px;
`
export const noComponentSubTitle = css`
    text-align: center;
    color: #1818196b;
    font-size: 14px;
    font-weight: 400;
    padding-bottom: 10px;
`
export const ctaContainer = css`
    cursor: pointer;
    margin: 10px 0px;
    background-color: #4a4de6;
    color: white;
    font-size: 14px;
    font-weight: 500;
    padding: 11px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 150px;
    border-radius: 8px;
`
export const addIconText = css`
    margin-right: 8px;
`
