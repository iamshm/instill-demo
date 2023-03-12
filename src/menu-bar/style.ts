import { css } from '@emotion/css'
import { mediaQueryMaxWidth } from '../utils/helpers'

export const menuContainer = (visible: boolean) => css`
    margin: 0;
    padding: 0;
    width: 250px;
    background-color: #3c38ce;
    position: fixed;
    height: 100%;
    overflow: auto;
    ${mediaQueryMaxWidth} {
        width: 80%;
        display: ${visible ? 'block' : 'none'};
        z-index: 2;
    }
`
export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 24px;
    height: calc(100% - 60px);
`
export const upperContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const titleContainer = css`
    font-size: 36px;
    font-weight: 600;
    color: white;
    width: 100%;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(230, 231, 233, 0.3);
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        cursor: pointer;
        display: none;
    }
    ${mediaQueryMaxWidth} {
        img {
            display: block;
        }
    }
`
export const leftContainer = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const profileContainer = css`
    padding: 10px;
    padding-right: 20px;
    height: 50px;
    width: 85%;
    background-color: rgba(74, 77, 230, 1);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`
export const teamTitle = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const circle = css`
    background-color: #ecd348;
    color: black;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`

export const titleText = css`
    font-size: 14px;
    font-weight: 500;
    color: white;
    padding-bottom: 5px;
`
export const subTitleText = css`
    font-size: 12px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.42);
`
export const menuListItem = css`
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 12px 5px;
`

export const leftMenuItem = (active: boolean) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
        margin-right: 10px;
    }
    font-size: 14px;
    font-weight: ${active ? '500' : '400'};
    color: ${active ? 'white' : 'rgba(255, 255, 255, 0.7) } '};
`
export const rightMenuItem = css`
    background-color: rgba(255, 160, 0, 1);
    height: 18px;
    width: 18px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 12px;
`

export const menuListContainer = css`
    width: 100%;
`
export const shortCut = css`
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 12px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.42);
`
export const footerContainer = css`
    display: flex;
    flex-direction: column;
`
export const storageContainer = css`
    background-color: #342bc2;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
`
export const upperStorageContainer = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const storageText = css`
    padding: 10px 0;
    font-size: 12px;
    font-weight: 500;
    color: #ffffff6b;
    span {
        color: #ffffff;
    }
`
export const storageTitle = css`
    font-size: 14px;
    font-weight: 500;
    color: white;
`
export const upgradeTitle = css`
    font-size: 12px;
    font-weight: 400;
    color: #caccf7;
`

export const progressBar = css`
    width: 100%;
    height: 4px;
    background-color: #4544da;
    overflow: hidden;
    margin-top: 5px;
`
export const progressBarInner = (progress: number) => css`
    width: ${progress}%;
    height: 4px;
    background-color: white;
`

export const divider = css`
    margin: 20px 0;
    height: 1px;
    width: 100%;
    background-color: rgba(230, 231, 233, 0.2);
`
export const bottomProfileContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const leftProfile = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const nameContainer = css`
    color: white;
`
