const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <div id="wrapper">
          <div class="header"></div>
          <div class="main-content"></div>
          <div class="footer"></div>
          <div class="center-image">
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <img src="images/Smiley.svg" width="5%" />
            <br></br>
            <br></br>
          </div>

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
            </h1>
            <br></br>
            <nav>
              <buttonsignup>
                <a href="/auth/signup">signup</a>
              </buttonsignup>
              <buttonlogin>
                <a href="/auth/login">login</a>
              </buttonlogin>
              <buttonlogout>
                <a href="/auth/logout">logout</a>
              </buttonlogout>
            </nav>
          </header>

          <main>{this.props.children}</main>

          <div class="sticky-container">
            <ul class="sticky">
              <li>
                <img src="images/facebook-circle.png" width="28" height="28" />
                <p><a href="https://www.facebook.com/" target="_blank">Like Us on<br></br>Facebook</a></p>
              </li>
              <li>
                <img src="images/Twitter-icon.png" width="28" height="28" />
                <p><a href="https://twitter.com/" target="_blank">Follow Us on<br></br>Twitter</a></p>
              </li>
              <li>
                <img src="images/googleLogo.png" width="28" height="28" />
                <p><a href="https://plus.google.com/" target="_blank">Follow Us on<br></br>Google+</a></p>
              </li>
              <li>
                <img src="images/linkedinLogo.png" width="28" height="28" />
                <p><a href="https://www.linkedin.com/" target="_blank">Follow Us on<br></br>LinkedIn</a></p>
              </li>
              <li>
                <img src="images/youtubeLogo.png" width="28" height="28" />
                <p><a href="http://www.youtube.com/" target="_blank">Subscribe on<br></br>YouTube</a></p>
              </li>
              <li>
                <img src="images/pinterestLogo.jpeg" width="28" height="28" />
                <p><a href="https://www.pinterest.com/" target="_blank">Follow Us on<br></br>Pinterest</a></p>
              </li>
            </ul>
          </div>

          <footer>Comments Regarding this Site Can Be Emailed to feelgoodmomentszenp2@gmail.com</footer>
        </body>
      </html >
    );
  }
}

module.exports = Layout;
