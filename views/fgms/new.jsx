const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="New Fgms">
        <form action="/fgms/" method="post">
          <input type="text" placeholder="write your fgm here" name="fgm" />
          <input type="submit" value="create fgm" />
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
