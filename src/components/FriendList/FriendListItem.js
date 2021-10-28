import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendListItem ({ friends } ) {

  return ( friends.map(friend => (
          <li className={s.item} key={friend.id}>
            <span className={s.status} style = { {backgroundColor:`${friend.isOnline ? "green" : "red" }`}}></span>
            <img className={s.avatar} src={friend.avatar} alt="{friend.name}" width="48" />
            <p className={s.name}>{friend.name}</p>
        </li>))
    
  );
};

FriendListItem.propTypes = {

 friends:PropTypes.array.isRequired,
};

export default FriendListItem;