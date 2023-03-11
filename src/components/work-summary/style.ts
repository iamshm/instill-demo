import { css } from '@emotion/css'
import { mediaQueryMaxWidth } from '../../utils/helpers'

export const container = css`
    grid-column: span 2;
    background-color: white;
    border: 1px solid #e6e7e9;
    border-radius: 8px;
    max-height: 400px;
    padding: 20px;
    ${mediaQueryMaxWidth} {
        grid-column: span 1;
        overflow-x: scroll;
    }
`

export const titleContainer = css`
    display: flex;
    justify-content: space-between;
`
export const titleText = css`
    color: rgba(24, 24, 25, 0.9);
    font-weight: 500;
    font-size: 16px;
    padding-bottom: 5px;
`
export const monthText = css`
    font-weight: 200;
    padding-bottom: 10px;
    font-size: 14px;
    color: gba(24, 24, 25, 0.42);
`
export const monthRevContainer = css`
    margin-left: 15px;
`
export const circle = (color: string) => css`
    height: 7px;
    width: 7px;
    border-radius: 50%;
    background-color: ${color};
    margin-right: 8px;
`
export const monthContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
`
export const monthDesc = css`
    color: rgba(24, 24, 25, 0.62);
    font-size: 12px;
    text-transform: uppercase;
`
export const revenueStyles = css`
    font-weight: 500;
    padding-left: 15px;
`
