import { useState } from 'react'
import CardList from '../components/card-list'
import NewComponent from '../components/new-component'
import SatisfactionRate from '../components/satisfaction-rate'
import Segmentation from '../components/segmentation'
import TopCountries from '../components/top-countries'
import WorkSummary from '../components/work-summary'
import MenuBar from '../menu-bar'
import {
    analyticsGridContainer,
    container,
    headerContainer,
    menuOpener,
    nameContainer,
    namePremiumContainer,
    premiumContainer,
    searchContainer,
} from './style'

const DashBoard = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleShowMenu = () => {
        setShowMenu(true)
    }
    const handleCloseMenu = () => {
        setShowMenu(false)
    }
    return (
        <>
            {showMenu && (
                <MenuBar visible={showMenu} handleClose={handleCloseMenu} />
            )}
            <div className={container}>
                <div className={headerContainer}>
                    <div className={namePremiumContainer}>
                        <img
                            className={menuOpener}
                            src="../assets/icons/three-line.png"
                            height={30}
                            width={30}
                            alt="menu"
                            onClick={handleShowMenu}
                        />
                        <div className={nameContainer}>Hello Suraj</div>
                        <div className={premiumContainer}>Premium</div>
                    </div>

                    <div className={searchContainer}>
                        <img
                            src="../assets/icons/search.png"
                            height={15}
                            width={15}
                            alt="search"
                        />
                        Search
                    </div>
                </div>
                <CardList />
                <div className={analyticsGridContainer}>
                    <WorkSummary />
                    <TopCountries />
                    <Segmentation />
                    <SatisfactionRate />
                    <NewComponent />
                </div>
            </div>
        </>
    )
}
export default DashBoard
