const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/style.css" />
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>Feel Good Moments</h1>
          </header>
          <main>{this.props.children}</main>
          <footer>
            <hr></hr>
            <h4>Please let me know if you would like a feature added to this website, email: feelgoodmomentszenp2@gmail.com </h4>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;