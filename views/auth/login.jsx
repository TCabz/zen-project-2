const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <form action="/auth/login" method="post">
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="password" placeholder="password" />
          <input type="submit" value="click here after you have entered your login username & password" />
        </form>
      </Layout>
    );
  }
}

module.exports = Login;
