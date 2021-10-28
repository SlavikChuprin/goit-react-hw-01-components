import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({friends} ) => {

  return (
    <ul className={s.friendList}>
<FriendListItem friends={ friends }/>
</ul>
  );
};

FriendList.propTypes = {

 friends:PropTypes.array.isRequired,
};

export default FriendList;