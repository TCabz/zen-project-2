const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css" integrity="sha512-xiunq9hpKsIcz42zt0o2vCo34xV0j6Ny8hgEylN3XBglZDtTZ2nwnqF/Z/TTCc18sGdvCjbFInNd++6q3J0N6g==" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/css/style.css" />
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>
              Feel Good Moments
              </h1>
            <h3>
              <nav>
                <span>
                  <a href="/auth/signup"> | new user sign up | </a>
                </span>
                <span>
                  <a href="/auth/login"> | login | </a>
                </span>
                <span>
                  <a href="/auth/logout"> | logout | </a>
                </span>
              </nav>
            </h3>


          </header>
          <main>{this.props.children}</main>
          <footer>
          </footer>
        </body >
      </html >
    );
  }
}

module.exports = Layout;