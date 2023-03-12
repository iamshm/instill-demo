import { dummyCategory } from '../../utils/constants'
import SkeletonContainer from '../skeleton-container'
import {
    categoryContainer,
    dot,
    segmentationContainer,
    stackContainer,
} from './style'

const Segmentation = () => {
    return (
        <SkeletonContainer
            title="Segmentation"
            subTitle="All users"
            cta={{
                title: 'Details',
                onClick: () => console.log('Segmentation'),
            }}
        >
            <div className={segmentationContainer}>
                <TextContainer />
                <StackedBarChart />
            </div>
        </SkeletonContainer>
    )
}

export default Segmentation

const TextContainer = () => {
    return (
        <div>
            {dummyCategory.map((data, index) => {
                const { text, color } = data
                return (
                    <div
                        key={index}
                        className={categoryContainer}
                        style={{
                            color: color,
                        }}
                    >
                        <span
                            className={dot}
                            style={{
                                backgroundColor: color,
                            }}
                        />
                        {text}
                    </div>
                )
            })}
        </div>
    )
}

const StackedBarChart = () => {
    return (
        <>
            <div
                className={stackContainer}
                style={{
                    backgroundColor: dummyCategory[0].color,
                    height: '100%',
                    borderRadius: '8px',
                }}
            />
            <div
                className={stackContainer}
                style={{
                    height: '80%',
                    borderRadius: '8px',

                    backgroundColor: dummyCategory[1].color,
                }}
            />
            <div
                className={stackContainer}
                style={{
                    height: '60%',
                    borderRadius: '8px',
                    backgroundColor: dummyCategory[2].color,
                }}
            />
            <div
                className={stackContainer}
                style={{
                    height: '40%',
                    borderRadius: '8px',
                    backgroundColor: dummyCategory[3].color,
                }}
            />
        </>
    )
}
