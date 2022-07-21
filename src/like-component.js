import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'

library.add(fasFaHeart, farFaHeart)

const LikeComponent = (props) => {
const currentIcon = props.state ? fasFaHeart : farFaHeart;
    return (
        <FontAwesomeIcon className= 'icon' icon = {currentIcon} onClick = {props.onClick} />
    );
}

export default LikeComponent;


