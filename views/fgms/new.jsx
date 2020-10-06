const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="New Fgms">
        <form action="/fgms/" method="post">
          <input type="text" placeholder="write your fgm here" name="fgm" />
          <input type="submit" value="Post The Feel Good Moments" />
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
