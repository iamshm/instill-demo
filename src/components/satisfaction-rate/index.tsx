import SkeletonContainer from '../skeleton-container'
import {
    bar,
    barOverflow,
    borderBar,
    container,
    hundredP,
    percentContainer,
    progress,
    textContainer,
    zeroP,
} from './style'

const SatisfactionRate = () => {
    return (
        <SkeletonContainer
            title="Satisfaction Rate"
            subTitle="From all projects"
            cta={{
                title: 'Details',
                onClick: () => console.log('Satisfaction Rate'),
            }}
        >
            <div className={container}>
                <div className={progress}>
                    <div className={barOverflow}>
                        <div className={bar}></div>
                        <div className={borderBar}></div>
                    </div>
                    <div className={textContainer}>
                        <div>80.81%</div>
                        <span>Based on likes</span>
                    </div>
                </div>
                <div className={percentContainer}>
                    <div className={zeroP}>0%</div>
                    <div className={hundredP}>100%</div>
                </div>
            </div>
        </SkeletonContainer>
    )
}

export default SatisfactionRate
