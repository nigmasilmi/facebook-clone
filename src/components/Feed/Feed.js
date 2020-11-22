import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';

const Feed = (props) => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic='https://res.cloudinary.com/dz3gm9c3w/image/upload/v1606064845/facebook-clone/freepik-avatar-07_urjnav.jpg'
                username='Betty'
                message='This works'
                timestamp='this is a timestamp'
                image='https://i2.wp.com/dianaurban.com/wp-content/uploads/2017/07/01-cat-stretching-feet.gif?resize=500%2C399&ssl=1'
            />
            <Post
                profilePic='https://res.cloudinary.com/dz3gm9c3w/image/upload/v1606064845/facebook-clone/freepik-avatar-04_raqvra.jpg'
                username='Anita'
                message='This works'
                timestamp='this is a timestamp'
                image=''
            />
        </div>
    )
}

export default Feed;
