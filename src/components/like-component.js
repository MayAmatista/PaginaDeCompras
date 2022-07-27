import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'


const LikeComponent = (props) => {
const currentIcon = props.liked ? fasFaHeart : farFaHeart;
    return (
        <FontAwesomeIcon className= 'icon' icon = {currentIcon} onClick = {props.onClick} />
    );
}

export default LikeComponent;


