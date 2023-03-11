import { css } from '@emotion/css'
import { mediaQueryMaxWidth } from '../../utils/helpers'

export const container = css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    ${mediaQueryMaxWidth} {
        display: flex;
        overflow-x: scroll;
        width: 100%;
        padding: 20px 0;
        -ms-overflow-style: none;
        scrollbar-width: none;
        ::-webkit-scrollbar {
            display: none;
        }
    }
`
export const cardContainer = css`
    border-radius: 10px;
    border: 1px solid #e6e7e9;
    min-height: 100px;
    background-color: white;
    min-width: 334px;
    padding: 15px;
`
export const nameRevenueContainer = css`
    display: flex;
    justify-content: space-between;
`
export const namePictureContainer = css`
    display: flex;
    justify-content: flex-start;
    padding-bottom: 15px;
`
export const nameContainer = css`
    padding-bottom: 5px;
`
export const pictureContainer = css`
    margin-right: 10px;
`

export const nameDescContainer = css`
    font-weight: 500;
`
export const descContainer = css`
    font-size: 12px;
    color: rgba(24, 24, 25, 0.42);
`
export const revenueContainer = (trend: string) => css`
    color: ${trend === 'up' ? '#4CAF50' : '#DD425A'};
    font-weight: 500;
    font-size: 18px;
`
export const trendContainer = css`
    padding: 3px;
    object-fit: contain;
`
export const revenueTrendContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const tasksContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
export const tasksText = css`
    font-size: 14px;
    font-weight: 500;
    color: rgba(24, 24, 25, 0.7);
    margin-bottom: 10px;
`
export const progressBarOuter = css`
    width: 100%;
    height: 6px;
    background-color: rgba(240, 241, 242, 1);
    overflow: hidden;
    border-radius: 5px;
`
export const progressBarInner = (progress: number) => css`
    width: ${progress}%;
    height: 6px;

    background: linear-gradient(270deg, #60b0fa 0%, #4a4de6 100%);
`
