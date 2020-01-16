import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar/Avatar";
import style from "./Comment.module.scss";
import FormComment from "../FormComment/FormComment";
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
class Comment extends PureComponent {
  state = {
    showReplies: false,
    replying: false
  };
  render() {
    const { showReplies, replying } = this.state;
    const { type, onEventClick } = this.props;
    return (
      <div className={style.Comment}>
        <div className={style.commentContainer}>
          <div className={style.top}>
            <div className={style.avatar}>
              {type === "comment" ? (
                <Avatar size="medium" />
              ) : (
                <Avatar size="small" />
              )}
            </div>
            <div className={style.commentInfo}>
              <div className={style.top}>
                <div className={style.userName}>UserName</div>
                <div className={style.date}>1 năm trước</div>
              </div>
              <div className={style.commentContent}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className={style.buttonsNormal}>
                <div className={style.buttonNormal}>
                  <button className={style.button}>
                    <i class="fas fa-thumbs-up" />
                  </button>
                  24N
                </div>
                <div className={style.buttonNormal}>
                  <button className={style.button}>
                    <i class="fas fa-thumbs-down" />
                  </button>
                  24N
                </div>
                <div className={style.buttonNormal}>
                  <button className={style.buttonReply} onClick={onEventClick}>
                    Phản hồi
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={style.body}>
            <FormComment />
          </div>
          <div className={style.replies}>
            <div className={style.repliesContainer}>
              <div className={style.showMore}>
                <button onClick={this._handleToggleShowMore}>
                  <i className={"fas fa-sort-down"} />
                  <span className={style.text}>
                    `Xem thêm ${replies.length} câu trả lời`}
                  </span>
                </button>
              </div>
              <div className={style.repliesList}>
                {replying && this._renderForm()}
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Comment.propTypes = {
  type: PropTypes.string,
  onEventClick: PropTypes.func
};
export default Comment;
