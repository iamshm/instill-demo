import { css } from '@emotion/css'
import { mediaQueryMaxWidth } from '../utils/helpers'

export const container = css`
    width: 200px;
    min-height: 100vh;
    height: 100%;
    background-color: #3c38ce;
    ${mediaQueryMaxWidth} {
        display: none;
    }
`
