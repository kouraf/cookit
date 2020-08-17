import React from 'react';
import Post from './components/Post';
import PostBox from './components/PostBox';
import './Feed.css'

export default function Feed() {
    return (
        <div className="col-7">
            <div className="feed_header sticky-top"><h4>Home</h4></div>
            <div class="feed">
                <PostBox />
                <Post
                    name="someone"
                    username="someone"
                    img="/e.jpg"
                    text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
                <Post
                    name="someone else"
                    username="someone"
                    img="/a.jpg"
                    text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
                <Post
                    name="someone"
                    username="someone"
                    img="/e.jpg"
                    text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />

            </div>
        </div>
    )
}
