const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Feel Good Momments App">
        <h3> {this.props.hello} </h3>
      </Layout>
    );
  }
}

module.exports = Index;
