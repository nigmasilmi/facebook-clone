import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';


const SidebarRow = ({ src, Icon, title }) => {
    // we are passing a component as prop
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            {title}
        </div>
    )
}

export default SidebarRow;
