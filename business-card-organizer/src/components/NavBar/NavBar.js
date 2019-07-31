import React from 'react';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
const NavBar = (props) => {
    function handleLogout() {
        localStorage.removeItem('token')
        //This will need to become functional
    }
    return (<Menu compact inverted size="large">
        <Menu.Menu position='left'>
            <Menu.Item><img src='https://github.com/business-card-organizer-app/Taran-UI/blob/taran-neeld/img/bco.png?raw=true' /></Menu.Item>
            <Menu.Item>Business Card Organizer</Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
            <Menu.Item name='logout' onClick={handleLogout}>Logout</Menu.Item>
        </Menu.Menu>
    </Menu>)

}

export default NavBar