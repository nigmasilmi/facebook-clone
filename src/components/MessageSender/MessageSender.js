import React, { useState } from 'react';
import './MessageSender.css';
// // 
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
// // 
import { useStateValue } from '../../Context/StateProvider';
import firebase from 'firebase/app';
import db from '../../firebase';

const MessageSender = (props) => {
    const [{ user }] = useStateValue();
    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        // funcs
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            image: imageURL,
            username: user.displayName
        })
        //reset input fields
        setInput('');
        setImageURL('');
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        className="messageSender_input"
                        type="text" placeholder={`What's on your mind, ${user.displayName}?`}
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
