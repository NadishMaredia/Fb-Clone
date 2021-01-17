import React from 'react'
import './Feed.css';
import StoryReed from './StoryReed';
import MessageSender from './MessageSender';

function Feed() {
    return (
        <div className="feed">
            {/* story */}
            <StoryReed />
            {/* MessageSender */}
            <MessageSender />
        </div>
    )
}

export default Feed
