import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'

library.add(fasFaHeart, farFaHeart)

const LikeComponent = (props) => {
    const [liked, setLiked] = useState(false);
    const currentIcon = liked ? fasFaHeart : farFaHeart;
    const currentClass = liked ? 'liked' : 'no-liked'
    return (
        <FontAwesomeIcon className = {currentClass} icon = {currentIcon} onClick={() => setLiked(!liked)} />
    );
}

export default LikeComponent;


