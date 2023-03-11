import CardList from '../components/card-list'
import WorkSummary from '../components/work-summary'
import {
    analyticsGridContainer,
    container,
    headerContainer,
    nameContainer,
    namePremiumContainer,
    premiumContainer,
    searchContainer,
} from './style'

const DashBoard = () => {
    return (
        <div className={container}>
            <div className={headerContainer}>
                <div className={namePremiumContainer}>
                    <div className={nameContainer}>Hello Joe</div>
                    <div className={premiumContainer}>Premium</div>
                </div>

                <div className={searchContainer}>Search</div>
            </div>
            <CardList />
            <div className={analyticsGridContainer}>
                <WorkSummary />
            </div>
        </div>
    )
}
export default DashBoard