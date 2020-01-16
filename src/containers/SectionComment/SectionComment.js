import React, { PureComponent } from "react";
import Comment from "../../components/Comment/Comment";
import FormComment from "../../components/FormComment/FormComment";
import style from "./SectionComment.module.scss";
const replies = [
  {
    user: {
      name: "A",
      avatar: "https://i.ytimg.com/vi/DQGSZTxLVrI/maxresdefault.jpg"
    },
    info: {
      publishedAt: "5 thÃ¡ng",
      content: "Reply"
    }
  },
  {
    user: {
      name: "B",
      avatar: "https://i.ytimg.com/vi/DQGSZTxLVrI/maxresdefault.jpg"
    },
    info: {
      publishedAt: "5 thÃ¡ng",
      content: "Reply"
    }
  },
  {
    user: {
      name: "C",
      avatar: "https://i.ytimg.com/vi/DQGSZTxLVrI/maxresdefault.jpg"
    },
    info: {
      publishedAt: "5 thÃ¡ng",
      content: "Reply"
    }
  },
  {
    user: {
      name: "D",
      avatar: "https://i.ytimg.com/vi/DQGSZTxLVrI/maxresdefault.jpg"
    },
    info: {
      publishedAt: "5 thÃ¡ng",
      content: "Reply"
    }
  }
];
class SectionComment extends PureComponent {
  state = {
    showReplies: false,
    replying: false
  };
  input = React.createRef();
  _handleReplying = e => {
    e.preventDefault();
    this.setState(state => {
      return {
        ...state,
        replying: true
      };
    });
  };
  _handleUnReplying = e => {
    e.preventDefault();
    this.setState(state => {
      return {
        ...state,
        replying: false
      };
    });
  };
  _handleToggleShowMore = e => {
    e.preventDefault();
    this.setState(state => {
      return {
        ...state,
        showReplies: !state.showReplies
      };
    });
  };
  _renderReplies(replies) {
    return replies.map(reply => <Comment type="reply" />);
  }
  _renderForm() {
    return (
      <div className={style.replyForm}>
        <FormComment type="reply" onEventClick={this._handleUnReplying} />
      </div>
    );
  }
  render() {
    const { showReplies, replying } = this.state;
    return <Comment>{this.props.children}</Comment>;
  }
}
export default SectionComment;
