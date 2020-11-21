import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

const Header = (props) => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1605997942/facebook-clone/Color/PNG/f_logo_RGB-Blue_100_a01j34.png" alt="facebook logo" />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__center">
                <div className="header__option">
                    <HomeIcon fontsSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontsSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsIcon fontsSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontIcon fontsSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontsSize="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src="" />
                    <h4>nigm4</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;
