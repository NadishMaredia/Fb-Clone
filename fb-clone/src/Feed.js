import React from 'react'
import './Feed.css';
import StoryReed from './StoryReed';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            {/* story */}
            <StoryReed />
            {/* MessageSender */}
            <MessageSender />
            {/* Post */}
            <Post 
                username="Nadish"
                profilePic="https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png"
                message="Hey its working"
                timestamp="timee"
                image="https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png" />
            <Post 
                username="Joe"/>
        </div>
    )
}

export default Feed
