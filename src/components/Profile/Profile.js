import PropTypes from 'prop-types';
import defaultPic from './default.jpg';

const Profile = ({
name,
tag,
location = 'not detected',
avatar = defaultPic,
stats = {},
} ) => {
  return (
    <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
      className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
  );
};

Profile.propTypes = {
name:PropTypes.string.isRequired,
tag:PropTypes.string.isRequired,
location:PropTypes.string,
avatar:PropTypes.string.isRequired,
stats:PropTypes.object,
};

export default Profile;