import React from 'react';
import Story from '../Story/Story';
import './StoryReel.css';

const StoryReel = (props) => {
    return (
        <div className="storyReel">
            <Story
                image='https://res.cloudinary.com/dz3gm9c3w/image/upload/v1606063754/facebook-clone/storyMock3_bjquj2.png'
                profileSrc='https://res.cloudinary.com/dz3gm9c3w/image/upload/v1606064845/facebook-clone/freepik-avatar-06_pl8rqe.jpg'
                title='Red Beard Joe'
            />
            <Story
                image='https://res.cloudinary.com/dz3gm9c3w/image/upload/v1606063845/facebook-clone/1_nvxpjc.png'
                profileSrc='https://res.cloudinary.com/dz3gm9c3w/image/upload/v1606064845/facebook-clone/freepik-avatar-07_urjnav.jpg'
                title='Betty'

            />
            <Story
                image='https://res.cloudinary.com/dz3gm9c3w/image/upload/v1606063755/facebook-clone/storyMock2_qxch8t.gif'
                profileSrc='https://res.cloudinary.com/dz3gm9c3w/image/upload/v1606064845/facebook-clone/freepik-avatar-05_kk9za6.jpg'
                title='John Doe'

            />
            <Story
                image='https://res.cloudinary.com/dz3gm9c3w/image/upload/v1606064318/facebook-clone/Gradient_Pastel_Heart_Valentine_s_Day_Instagram_Story_xhkuqg.png'
                profileSrc='https://res.cloudinary.com/dz3gm9c3w/image/upload/v1606064845/facebook-clone/freepik-avatar-04_raqvra.jpg'
                title='Anita'

            />
            <Story
                image='https://res.cloudinary.com/dz3gm9c3w/image/upload/v1606064544/facebook-clone/1b_ip4rmo.png'
                profileSrc='https://res.cloudinary.com/dz3gm9c3w/image/upload/v1606064845/facebook-clone/freepik-avatar-02_jxplaq.jpg'
                title='Happy George'

            />
        </div>
    )
}

export default StoryReel;
