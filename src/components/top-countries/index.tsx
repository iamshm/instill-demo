import { countriesDummyData } from '../../utils/constants'
import { ICountryDummyData } from '../../utils/interface'
import SkeletonContainer from '../skeleton-container'
import {
    countryContainer,
    imageContainer,
    listContainer,
    listItem,
} from './style'

const TopCountries = () => {
    return (
        <SkeletonContainer
            title="Top Countries"
            subTitle="Favourites"
            cta={{
                title: 'View All',
                onClick: () => console.log('Top Countries'),
            }}
        >
            <div className={listContainer}>
                {countriesDummyData.map((data: ICountryDummyData, index) => (
                    <ListItem key={index} {...data} />
                ))}
            </div>
        </SkeletonContainer>
    )
}

export default TopCountries

const ListItem = ({ count, countryName, flagSource }: ICountryDummyData) => {
    return (
        <div className={listItem}>
            <img
                className={imageContainer}
                style={{
                    objectFit: 'contain',
                }}
                src={flagSource}
                height={30}
                width={30}
                alt={countryName}
            />
            <div className={countryContainer}>
                <span> {countryName}</span>
                <span>{count}</span>
            </div>
        </div>
    )
}
