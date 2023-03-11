import { cardsDummyData, trendIconPath } from '../../utils/constants'
import { ICardsDummyData } from '../../utils/interface'
import {
    cardContainer,
    container,
    descContainer,
    nameContainer,
    nameDescContainer,
    namePictureContainer,
    nameRevenueContainer,
    pictureContainer,
    progressBarInner,
    progressBarOuter,
    revenueContainer,
    revenueTrendContainer,
    tasksContainer,
    tasksText,
    trendContainer,
} from './style'

const CardList = () => {
    return (
        <div className={container}>
            {cardsDummyData.map((data) => (
                <Cards data={data} />
            ))}
        </div>
    )
}

export default CardList

export const Cards = ({ data }: { data: ICardsDummyData }) => {
    const {
        name,
        description,
        profileImage,
        totalTasks,
        completedTasks,
        trend,
        revenue,
    } = data

    const getTrendIconPath = (): string => {
        if (trend === 'up') {
            return trendIconPath.up
        }
        return trendIconPath.down
    }

    const getTaskCompletedText = () => {
        return `${completedTasks} from ${totalTasks} completed`
    }

    const getProgressPercent = () => {
        return (completedTasks / totalTasks) * 100
    }

    return (
        <div className={cardContainer}>
            <div className={nameRevenueContainer}>
                <div className={namePictureContainer}>
                    <img
                        className={pictureContainer}
                        src={profileImage}
                        alt={name}
                        height={40}
                        width={40}
                    />
                    <div className={nameDescContainer}>
                        <div className={nameContainer}>{name}</div>
                        <div className={descContainer}>{description}</div>
                    </div>
                </div>
                <div className={revenueTrendContainer}>
                    <img
                        className={trendContainer}
                        src={getTrendIconPath()}
                        alt={trend}
                        height={14}
                        width={25}
                    />
                    <div
                        className={revenueContainer(trend)}
                    >{`$${revenue.toFixed(2)}`}</div>
                </div>
            </div>
            <div className={tasksContainer}>
                <div className={tasksText}>{getTaskCompletedText()}</div>
                <div className={progressBarOuter}>
                    <div
                        className={progressBarInner(getProgressPercent())}
                    ></div>
                </div>
            </div>
        </div>
    )
}
