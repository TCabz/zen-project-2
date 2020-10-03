const React = require("react");
const Layout = require("../layout.jsx");

class Fail extends React.Component {
  render() {
    return (
      <Layout title="My Good Feel Moments">
        <h1>FAILED TO LOGIN</h1>
      </Layout>
    );
  }
}

module.exports = Fail;
