import { container, footerContainer, headerContainer } from './style'
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
                <span>{title}</span>
                <span>{subTitle}</span>
            </div>
            {children}
            <div className={footerContainer}>
                <span onClick={cta.onClick}>{cta.title}</span>
            </div>
        </div>
    )
}

export default SkeletonContainer
