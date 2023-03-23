'use strict';

function Homepage() {
  return (
    <div>
      <p>Welcome, user!</p>
      <a href="/cards">Cards Page</a><br></br>
      <img src="/static/img/balloonicorn.jpg" />
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
