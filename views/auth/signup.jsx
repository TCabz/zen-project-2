const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <form action="/auth/signup" method="post">
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="password" placeholder="password" />
          <input type="submit" value="click here after you have entered your signup username & password" />
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
