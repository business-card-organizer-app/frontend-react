import React from 'react';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
const NavBar = (props) => {
    function handleLogout() {
        localStorage.removeItem('token')
        window.location = 'https://business-card-organizer.netlify.com/login/'
    }
    const goHome = (props) => {
        window.location = 'https://business-card-organizer.netlify.com/'
    }
    return (
        <Menu className='nav' compact inverted size="large">
            <Menu.Menu position='left'>
                <Menu.Item onClick={goHome}><img src='https://github.com/business-card-organizer-app/Taran-UI/blob/taran-neeld/img/bco.png?raw=true' /></Menu.Item>
                <Menu.Item>Business Card Organizer</Menu.Item>
            </Menu.Menu>

            <Menu.Menu position='right'>
                <Menu.Item name='logout' onClick={handleLogout}>Logout</Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default NavBar