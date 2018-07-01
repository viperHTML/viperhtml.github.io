function Avatar(user) {
  return hyperHTML.wire(user, ':avatar')`
  <img class=avatar
    src=${user.avatarUrl}
    alt=${user.name}>`;
}

function UserInfo(user) {
  return hyperHTML.wire(user, ':user-info')`
  <div class="user-info">
    ${Avatar(user)}
    <div class="user-info-name">
      ${user.name}
    </div>
  </div>`;
}

function Comment(props) {
  return hyperHTML.wire(props, ':comment')`
  <div class="comment">
    ${UserInfo(props.author)}
    <div class="comment-text">
      ${props.text}
    </div>
    <div class="comment-date">
      ${formatDate(props.date)}
    </div>
  </div>`;
}