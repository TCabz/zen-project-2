const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { fgms } = this.props
    return (
      <Layout title="My Feel Good Moments">
        <h1> My Feel Good Moments </h1>
        <a hdref="/fgms/new">
          <button>New Feel Good Moment</button>
        </a>
        {fgms.map((fgm) => (
          <h2 > {fgm.fgm}</h2>
        ))}
      </Layout>
    );
  }
}

module.exports = Index;
