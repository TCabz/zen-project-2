const React = require("react");

class New extends React.Component {
      render() {
            return (
                  <div>
                        <h1>New Feel Good Moments Page</h1>
                        <form action="/fgm" method="POST">
                              fgmComment: <input type="text" fgmComment="fgmComment" />
                        </form>
                  </div>
            );
      }
}

module.exports = New;