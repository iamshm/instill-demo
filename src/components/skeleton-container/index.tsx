import {
    container,
    footerContainer,
    headerContainer,
    subTitleText,
    titleText,
} from './style'
interface IProps {
    title: string
    subTitle: string
    children: any
    cta: {
        title: string
        onClick: () => void
    }
}
const SkeletonContainer = ({ title, subTitle, children, cta }: IProps) => {
    return (
        <div className={container}>
            <div className={headerContainer}>
                <span className={titleText}>{title}</span>
                <span className={subTitleText}>{subTitle}</span>
            </div>
            {children}
            <div className={footerContainer}>
                <span onClick={cta.onClick}>{cta.title}</span>
                <img
                    src="../assets/icons/chevron-right.svg"
                    alt="right"
                    height={12}
                    width={12}
                />
            </div>
        </div>
    )
}

export default SkeletonContainer
