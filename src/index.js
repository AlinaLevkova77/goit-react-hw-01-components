import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import user from 'user.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const Profile = (
  <div class="profile">
  <div class="description">
    <img
      src={user.avatar}
      alt="User avatar"
      class="avatar"
    />
      <p class="name">{user.username}</p>
      <p class="tag">{user.tag}</p>
    <p class="location">{user.location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers{user.stats.followers}</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views{user.stats.views}</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes{user.stats.likes}</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
)

ReactDOM.render(Profile, document.querySelector('user.json'))

