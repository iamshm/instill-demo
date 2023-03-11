import DashBoard from './dashboard'
import MenuBar from './menu-bar'
import { container } from './style'

const App = () => {
    return (
        <div className={container}>
            <MenuBar />
            <DashBoard />
        </div>
    )
}

export default App
