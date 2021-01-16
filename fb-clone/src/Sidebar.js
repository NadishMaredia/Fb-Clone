import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow.js';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow title="Pages" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" />
            <SidebarRow title="COVID-19 Information Center" Icon={LocalHospitalIcon} />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messanger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="More" />
        </div>
    )
}

export default Sidebar
