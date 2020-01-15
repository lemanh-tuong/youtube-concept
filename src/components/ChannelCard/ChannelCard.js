import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import style from './ChannelCard.module.scss';
class ChannelCard extends PureComponent {
	render() {
		const { channelTitle, channelId, description, imgSrc } = this.props;
		return (
			<div className={style.ChannelCard}>
				<div className={style.header}>
					<div className="img">
						<Link to={`/user/${channelId}`}>
							<img src={imgSrc} alt="Img" className={style.channelImg} />
						</Link>
					</div>
				</div>
				<div className={style.body}>
					<div className={style.channelName}>
						<Link to={`/channel/${channelId}`}>{channelTitle}</Link>
					</div>
					<div className={style.channelDesc}>
						{description}
					</div>
				</div>
			</div>
		)
	}
}
ChannelCard.propTypes = {
	channelTitle: PropTypes.string,
	channelId: PropTypes.string,
	description: PropTypes.string,
	imgSrc: PropTypes.string,
}
ChannelCard.defaultProps = {
	channelTitle: '',
	channelId: '',
	description: '',
	imgSrc: ''
}
export default ChannelCard;
