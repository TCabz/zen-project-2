const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Feel Good Moments">
        <h1> {this.props.hello} </h1>
      // form code goes here

      </Layout>
    );
  }
}

module.exports = Index;

