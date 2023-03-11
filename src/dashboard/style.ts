import { css } from '@emotion/css'
import { mediaQueryMaxWidth } from '../utils/helpers'

export const container = css`
    padding: 50px;
    background-color: #f9f9fa;
    width: calc(100vw - 300px);
    ${mediaQueryMaxWidth} {
        padding: 20px;
        width: 100vw;
    }
`
export const headerContainer = css`
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
    ${mediaQueryMaxWidth} {
        flex-direction: column;
        justify-content: center;
    }
`
export const nameContainer = css`
    color: #181819;
    font-size: 24px;
    font-weight: 500;
`
export const searchContainer = css`
    background-color: blueviolet;
`
export const namePremiumContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const premiumContainer = css`
    border-radius: 30px;
    margin-left: 10px;
    color: rgba(237, 103, 0, 1);
    background-color: rgba(255, 236, 179, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    width: fit-content;
    padding: 8px 12px;
    font-size: 13px;
`
export const analyticsGridContainer = css`
    padding-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-auto-rows: 1fr;
    grid-gap: 20px;
    ${mediaQueryMaxWidth} {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-auto-rows: 1fr;
    }
`
