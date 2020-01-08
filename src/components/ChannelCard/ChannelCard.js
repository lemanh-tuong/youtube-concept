import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { AppContext } from '../../AppProvider';
import style from './ChannelCard.module.scss';
class ChannelCard extends PureComponent {
	render() {
		const { channelTitle, channelId, imgSrcs } = this.props;
		const imgHigh = imgSrcs.high.url;
		return (
			<div className={style.ChannelCard}>
				<div className={style.header}>
					<div className="img">
						<AppContext.Consumer>
							{({onClickWatchVideo}) => {
								return (
									<Link to={`/user/${channelId}`}>
										<img src={imgHigh} alt="Img" className={style.channelImg} />
									</Link>
								)
							}}
						</AppContext.Consumer>
					</div>
				</div>
				<div className={style.body}>
					<div className={style.channelName}>
						<Link to={`/channel/${channelId}`}>{channelTitle}</Link>
					</div>
				</div>
			</div>
		)
	}
}
ChannelCard.propTypes = {
	channelTitle: PropTypes.string,
	channelId: PropTypes.string,
	imgSrcs: PropTypes.object,
}
export default ChannelCard;
