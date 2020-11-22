import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar(props) {

    return (
        <div className="sidebar">
            <SidebarRow src='https://avatars2.githubusercontent.com/u/28691710?s=460&u=4811d03d7a1d73b76eae9135b7b2d056f85524ca&v=4' title='nigm4' />
            <SidebarRow
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"
            />
            <SidebarRow
                Icon={EmojiFlagsIcon}
                title="Pages"
            /><SidebarRow
                Icon={PeopleIcon}
                title="Friends"
            /><SidebarRow
                Icon={ChatIcon}
                title="Messenger"
            /><SidebarRow
                Icon={StorefrontIcon}
                title="Marketplace"
            /><SidebarRow
                Icon={VideoLibraryIcon}
                title="Videos"
            /><SidebarRow
                Icon={ExpandMoreOutlinedIcon}
                title="More"
            />
        </div>
    )
}

export default Sidebar;
