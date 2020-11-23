import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';
// import { useStateValue } from '../../Context/StateProvider';
import db from '../../firebase';


const Feed = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
            })
    });


    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map(post => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    )
}

export default Feed;
