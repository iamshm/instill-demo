import { css } from '@emotion/css'
import { mediaQueryMaxWidth } from '../utils/helpers'

export const container = css`
    margin-left: 250px;
    height: 100%;
    padding: 50px;
    background-color: #f9f9fa;
    ${mediaQueryMaxWidth} {
        margin-left: 0px;
        padding: 20px;
    }
`
export const menuOpener = css`
    display: none;
    ${mediaQueryMaxWidth} {
        display: block;
        margin-right: 10px;
        cursor: pointer;
    }
`
export const headerContainer = css`
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
    ${mediaQueryMaxWidth} {
        padding-bottom: 5px;
    }
`
export const nameContainer = css`
    color: #181819;
    font-size: 24px;
    font-weight: 500;
`
export const searchContainer = css`
    background-color: white;
    padding: 10px;
    width: 200px;
    border-radius: 8px;
    border: 1px solid rgba(230, 231, 233, 1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    color: rgba(24, 24, 25, 0.42);
    img {
        margin-right: 5px;
    }
    ${mediaQueryMaxWidth} {
        padding: 10px;
        width: 100px;
    }
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
    ${mediaQueryMaxWidth} {
        padding: 8px 8px;
        font-weight: 400;
        font-size: 11px;
    }
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
