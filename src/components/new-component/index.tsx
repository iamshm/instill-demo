import {
    addIconText,
    container,
    ctaContainer,
    imgContainer,
    noComponentSubTitle,
    noComponentTitle,
} from './style'

const NewComponent = () => {
    const handleNewAddClick = () => {
        console.log('Add clicked')
    }
    return (
        <div className={container}>
            <img
                className={imgContainer}
                src="../assets/icons/add.png"
                height={50}
                width={50}
                alt="add"
            />
            <div className={noComponentTitle}>No components created yet</div>
            <div className={noComponentSubTitle}>
                Simply create your first component.
                <br /> Just click on the button
            </div>
            <div className={ctaContainer} onClick={handleNewAddClick}>
                <img
                    className={addIconText}
                    src="../assets/icons/plus.png"
                    height={13}
                    width={13}
                    alt="plus"
                />
                <span>Add component</span>
            </div>
        </div>
    )
}
export default NewComponent
