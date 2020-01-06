import React, { PureComponent } from 'react';
import Comment from '../../components/Comment/Comment';
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
	_renderReplies(replies) {
		return replies.map(reply => <Comment type="reply"/>)
	}
	_renderr
	render() {
		return (
			<div className="SectionComment">
				<div className="SectionComment__content">
					<Comment type="comment"/>
				</div>
				<div className={style.replies}>
					{this._renderReplies(replies)}
				</div>
			</div>
		)
	}
}
export default SectionComment;