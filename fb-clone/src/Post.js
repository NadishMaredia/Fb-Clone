import { Avatar } from '@material-ui/core';
import React from 'react'
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>Timestamp..</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt="image" />
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post
