import { pictureContainer } from '../components/card-list/style'
import {
    primaryDashBoardList,
    secondaryDashBoardList,
} from '../utils/constants'
import { IIconList } from '../utils/interface'
import {
    bottomProfileContainer,
    circle,
    container,
    divider,
    footerContainer,
    leftContainer,
    leftMenuItem,
    leftProfile,
    menuContainer,
    menuListContainer,
    menuListItem,
    nameContainer,
    profileContainer,
    progressBar,
    progressBarInner,
    rightMenuItem,
    shortCut,
    storageContainer,
    storageText,
    storageTitle,
    subTitleText,
    teamTitle,
    titleContainer,
    titleText,
    upgradeTitle,
    upperContainer,
    upperStorageContainer,
} from './style'

const MenuBar = ({
    visible = false,
    handleClose,
}: {
    visible?: boolean
    handleClose?: () => void
}) => {
    const handleClick = () => {
        handleClose && handleClose()
    }
    return (
        <div className={menuContainer(visible)}>
            <Menu handleClose={handleClick} />
        </div>
    )
}
export default MenuBar

export const Menu = ({ handleClose }: { handleClose: () => void }) => {
    return (
        <div className={container}>
            <div className={upperContainer}>
                <div className={titleContainer}>
                    <div>Instill</div>
                    <img
                        src="../assets/icons/close.png"
                        height={15}
                        width={15}
                        alt="swap"
                        onClick={handleClose}
                    />
                </div>
                <div className={profileContainer}>
                    <div className={leftContainer}>
                        <div className={circle}>I</div>
                        <div className={teamTitle}>
                            <div className={titleText}>Instill</div>
                            <div className={subTitleText}>general team</div>
                        </div>
                    </div>
                    <div>
                        <img
                            src="../assets/icons/swap.png"
                            height={20}
                            width={10}
                            alt="swap"
                        />
                    </div>
                </div>
                <div className={menuListContainer}>
                    {primaryDashBoardList.map((data: IIconList, index) => (
                        <MenuItems key={index} data={data} />
                    ))}
                </div>
                <div className={shortCut}>SHORTCUT</div>
                <div className={menuListContainer}>
                    {secondaryDashBoardList.map((data: IIconList, index) => (
                        <MenuItems key={index} data={data} />
                    ))}
                </div>
            </div>
            <div className={footerContainer}>
                <div className={storageContainer}>
                    <div className={upperStorageContainer}>
                        <span className={storageTitle}>Storage</span>
                        <span className={upgradeTitle}>Upgrade</span>
                    </div>
                    <div className={storageText}>
                        <div>
                            <span>3.4GB</span> of 15GB
                        </div>
                    </div>
                    <div className={progressBar}>
                        <div
                            className={progressBarInner((3.4 / 15) * 100)}
                        ></div>
                    </div>
                </div>
                <div className={divider}></div>
                <div className={bottomProfileContainer}>
                    <div className={leftProfile}>
                        <img
                            className={pictureContainer}
                            src="../assets/profile-images/my.png"
                            alt="Suraj"
                            height={40}
                            width={40}
                        />
                        <div className={nameContainer}>Suraj Maharana</div>
                    </div>
                    <img
                        src="../assets/icons/swap.png"
                        height={20}
                        width={10}
                        alt="swap"
                    />
                </div>
            </div>
        </div>
    )
}
interface IProps {
    data: IIconList
}
const MenuItems = ({ data }: IProps) => {
    const { text, iconUrl, notificationCount, active = false } = data
    const handleClick = () => {
        console.log(text)
    }
    return (
        <div className={menuListItem} onClick={handleClick}>
            <div className={leftMenuItem(active)}>
                <img src={iconUrl} height={20} width={20} alt={text} />
                <span>{text}</span>
            </div>
            {notificationCount && (
                <div className={rightMenuItem}>{notificationCount}</div>
            )}
        </div>
    )
}
