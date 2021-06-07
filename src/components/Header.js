import LeftMenu from "./HeaderComponents/LeftMenu"
import Search from './HeaderComponents/Search'
import "../styles/Header.css"
function Header() {
    return (
        <header className="header">

        <LeftMenu/>

        <Search/>

        </header>
    )
}
export default Header 