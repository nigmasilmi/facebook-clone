import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

const MessageSender = (props) => {
    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        // funcs
        //reset input fields
        setInput('');
        setImageURL('');
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input
                        className="messageSender_input"
                        type="text" placeholder="What´s on your mind?"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <input
                        placeholder="image URL (optional)"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                    />
                    <button
                        onClick={handleSubmit}
                        type="submit"
                    >Send
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>

        </div>
    )
};

export default MessageSender;
