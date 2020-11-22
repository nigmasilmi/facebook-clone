import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';

const Feed = (props) => {
    return (
        <div className="feed">
            <StoryReel />
            {/* History reel */}
            {/* Message sender */}
            <MessageSender />
        </div>
    )
}

export default Feed;
