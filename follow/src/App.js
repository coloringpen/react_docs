import './App.css';

function formatDate(date) {
  return date.toLocaleDateString();
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserName(props) {
  return <div className="UserInfo-name">{props.user.name}</div>;
}

function UserInfo(props) {
  return (
    <div className="userInfo">
      <Avatar user={props.user} />
      <UserName user={props.user} />
    </div>
  );
}

function Text(props) {
  return <div className="Comment-text">{props.text}</div>;
}

function Date(props) {
  return <div className='"Comment-date'>{formatDate(props.date)}</div>;
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <Text text={props.text} />
      <Date date={props.date} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </div>
  );
}

export default App;
