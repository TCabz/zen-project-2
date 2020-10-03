const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { fgms } = this.props;
    return (
      <Layout title="New Feel Good Moment">
        <form action="/fgms/" method="post">
          <input type="text" placeholder="Write Your Good Feel Moment Here" name="fgm" />
          <input type="submit" value="create fgm" />
        </form>
      </Layout >
    );
  }
}

module.exports = Index;
