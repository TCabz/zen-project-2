const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { fgms } = this.props;
    return (
      <Layout title="My Fgms">
        <h1> My Fgms </h1>
        <a href="/fgms/new">
          <button>New Fgm</button>
        </a>
        {fgms.map((fgm) => (
          <div>
            <h2>{fgm.fgm}</h2>
            <form action={`/fgms/${fgm._id}?_method=DELETE`} method="POST">
              <input type="submit" value="delete" />
            </form>
            <form action={`/fgms/edit/${fgm._id}`} method="GET">
              <input type="submit" value="Edit" />
            </form>
          </div>
        ))}
      </Layout>
    );
  }
}

module.exports = Index;
