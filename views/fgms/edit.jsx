const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { fgm } = this.props;
    return (
      <Layout title="Edit Fgm">
        <form action={`/fgms/edit/${fgm._id}?_method=PUT`} method="post">
          <input
            type="text"
            value={fgm.fgm}
            placeholder="write your fgm here"
            name="fgm"
          />
          <input type="submit" value="edit fgm" />
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
