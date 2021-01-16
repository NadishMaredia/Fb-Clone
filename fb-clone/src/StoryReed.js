import React from 'react'
import './StoryReed.css';
import Story from './Story';

const img =
  'https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg';

function StoryReed() {
    return (
        <div className="storyReed">
            {/* Story */}
            <Story
                image={img}
                profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
                title="Goon Deve3"
            />
            <Story
                image={img}
                profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
                title="Goon Deve3"
            />
            <Story
                image={img}
                profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
                title="Goon Deve3"
            />
            <Story
                image={img}
                profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
                title="Goon Deve3"
            />
            <Story
                image={img}
                profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
                title="Goon Deve3"
            />
        </div>
    )
}

export default StoryReed
