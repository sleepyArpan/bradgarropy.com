import Logo from "components/Logo"
import MobileNavigation from "components/MobileNavigation"
import Navigation from "components/Navigation"
import {AppProvider} from "context/App"
import {Link} from "gatsby"
import styled from "styled-components"

const HeaderWrapper = styled.header`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem;

    a {
        display: inline-block;
    }
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Link to="/" aria-label="bg">
                <Logo />
            </Link>

            <AppProvider>
                <Navigation />
                <MobileNavigation />
            </AppProvider>
        </HeaderWrapper>
    )
}

export default Header
