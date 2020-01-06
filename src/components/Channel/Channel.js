import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import style from './Channel.module.scss';
class Channel extends Component {
	render() {
		const { status, imgSrc, channelName, channelLocation, channelContact } = this.props
		return (
			<div className={style.channel}>
				<div className={style.header}>
					<Avatar status={status} />
				</div>
				<div className={style.body}>
					<div className={style.name}>
						Nannie Neison
					</div>
					<div className={style.location}>
						Montreal, QC
					</div>
				</div>
				<div className={style.footer}>
					<div className={style.contact}>
						<div className={style.item}>
							<div className={style.ammount}>278</div>
							<div className={style.nameContact}>Videos</div>
						</div>
						<div className={style.item}>
							<div className={style.ammount}>36.5K</div>
							<div className={style.nameContact}>Subcribers</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
Channel.propTypes = {
	status: PropTypes.string,
	imgSrc: PropTypes.string,
	channelName: PropTypes.string,
	channelLocation: PropTypes.string,
	channelContact: PropTypes.array
}
export default Channel;