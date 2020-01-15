import React, { PureComponent } from 'react';
import { AppContext } from '../../AppProvider';
import Comment from '../Comment/Comment';
import FormComment from '../FormComment/FormComment';
import style from './SectionComment.module.scss';
const replies = [
	{
		user: {
			name: "A",
			avatar: "https://i.ytimg.com/vi/DQGSZTxLVrI/maxresdefault.jpg"
		},
		info: {
			publishedAt: "5 tháng",
			content:"Reply"
		}
	},
	{
		user: {
			name: "B",
			avatar: "https://i.ytimg.com/vi/DQGSZTxLVrI/maxresdefault.jpg"
		},
		info: {
			publishedAt: "5 tháng",
			content:"Reply"
		}
	},
	{
		user: {
			name: "C",
			avatar: "https://i.ytimg.com/vi/DQGSZTxLVrI/maxresdefault.jpg"
		},
		info: {
			publishedAt: "5 tháng",
			content:"Reply"
		}
	},
	{
		user: {
			name: "D",
			avatar: "https://i.ytimg.com/vi/DQGSZTxLVrI/maxresdefault.jpg"
		},
		info: {
			publishedAt: "5 tháng",
			content:"Reply"
		}
	},
]
class SectionComment extends PureComponent {
	state = {
		showReplies: false,
		replying: false,
	}
	input = React.createRef();
	_handleReplying = (e) => {
		e.preventDefault();
		this.setState(state => {
			return {
				...state,
				replying: true
			}
		})
	}
	_handleUnReplying = (e) => {
		e.preventDefault();
		this.setState(state => {
			return {
				...state,
				replying: false
			}
		})
	}
	_handleToggleShowMore = (e) => {
		e.preventDefault();
		this.setState(state => {
			return {
				...state,
				showReplies: !state.showReplies
			}
		})
	}
	_renderReplies(replies) {
		return replies.map(reply => <Comment type="reply"/>)
	}
	_renderForm() {
		return (
			<div className={style.replyForm}>
				<AppContext.Consumer>
					{({onSubmitComment}) => {
						return (
							<FormComment
							type="reply"
							onEventClick={this._handleUnReplying}
							onEventSubmit={onSubmitComment}
							/>
					)}}
				</AppContext.Consumer>

			</div>
		)
	}
	render() {
		const { showReplies, replying } = this.state
		return (
			<div className={style.SectionComment}>
				<div className="SectionComment__content">
					<Comment type="comment" onEventClick={this._handleReplying}/>
					{replying && this._renderForm()}
				</div>
				<div className={style.replies}>
					<div className={style.repliesContainer}>
						<div className={style.showMore}>
							<button onClick={this._handleToggleShowMore}>
								<i className={showReplies ? "fas fa-sort-up" : "fas fa-sort-down"}></i>
								<span className={style.text}>
									{showReplies ? "Ẩn câu trả lời" : `Xem thêm ${replies.length} câu trả lời`}
								</span>
							</button>
						</div>
						<div className={showReplies ? style.repliesList : style.hidden}>
							{this._renderReplies(replies)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default SectionComment;
