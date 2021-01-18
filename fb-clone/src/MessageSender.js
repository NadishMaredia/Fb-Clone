import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setimageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();  

        setInput('');
        setimageUrl('');
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form className="messageSender__form">
                    <input type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder="Whats's on your mind?" />
                    <input type="text"
                        value={imageUrl}
                        onChange={e => setimageUrl(e.target.value)}
                        placeholder="Image URL (Optional)" />

                    <Button onClick={handleSubmit} type="submit">Hidden submit</Button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:'green'}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:'orange'}} />
                    <h3>Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
