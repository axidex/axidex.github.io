'use strict';

const e = React.createElement;
const e2 = React.createElement;


class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
        return e2(
        'span', 
        { onClick: () => this.setState({ liked: false }) },
        'You liked this'
      );
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
  
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);