import { css } from '@emotion/css'

export const listContainer = css`
    flex-grow: 1;
    margin-right: -20px;
    padding-top: 2px;
    overflow-y: scroll;
    max-height: 200px;
`
export const listItem = css`
    display: flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const imageContainer = css`
    object-fit: contain;
`
export const countryContainer = css`
    flex-grow: 1;
    display: flex;
    padding: 11px 20px 11px 10px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e7e9;
`
