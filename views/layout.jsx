const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <div id="wrapper">
          <div class="header"></div>
          <div class="main-content"></div>
          <div class="footer"></div>
        </div>
        <head>
          <title>{this.props.title}</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css"
            integrity="sha512-xiunq9hpKsIcz42zt0o2vCo34xV0j6Ny8hgEylN3XBglZDtTZ2nwnqF/Z/TTCc18sGdvCjbFInNd++6q3J0N6g=="
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/css/style.css" />
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>
              Feel Good Moments
              <nav>
                <buttonSignup>
                  <a href="/auth/signup">signup</a>
                </buttonSignup>
                <buttonLogin>
                  <a href="/auth/login">login</a>
                </buttonLogin>
                <buttonLogout>
                  <a href="/auth/logout">logout</a>
                </buttonLogout>
              </nav>
            </h1>
          </header>
          <main>{this.props.children}</main>

          <div class="sticky-container">
            <ul class="sticky">
              <li>
                <img src="images/facebook-circle.png" width="28" height="28" />
                <p><a href="https://www.facebook.com/codexworld" target="_blank">Like Us on<br></br>Facebook</a></p>
              </li>
              <li>
                <img src="images/Twitter-icon.png" width="28" height="28" />
                <p><a href="https://twitter.com/codexworldblog" target="_blank">Follow Us on<br></br>Twitter</a></p>
              </li>
              <li>
                <img src="images/gplus-circle.png" width="28" height="28" />
                <p><a href="https://plus.google.com/codexworld" target="_blank">Follow Us on<br></br>Google+</a></p>
              </li>
              <li>
                <img src="images/linkedin-circle.png" width="28" height="28" />
                <p><a href="https://www.linkedin.com/company/codexworld" target="_blank">Follow Us on<br></br>LinkedIn</a></p>
              </li>
              <li>
                <img src="images/youtube-circle.png" width="28" height="28" />
                <p><a href="http://www.youtube.com/codexworld" target="_blank">Subscribe on<br></br>YouTube</a></p>
              </li>
              <li>
                <img src="images/pin-circle.png" width="28" height="28" />
                <p><a href="https://www.pinterest.com/codexworld" target="_blank">Follow Us on<br></br>Pinterest</a></p>
              </li>
            </ul>
          </div>















          <footer>Comments Regarding this Site Can Be Emailed to tcabezon@gmail.com</footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
