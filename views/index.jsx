const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
        <h3> {this.props.hello} </h3>
      </Layout>
    );
  }
}

module.exports = Index;
