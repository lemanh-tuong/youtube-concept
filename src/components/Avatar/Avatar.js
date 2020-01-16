import React, { memo } from 'react';
import PropTypes from 'prop-types';
import style from './Avatar.module.scss';

const Avatar = memo (({statusRequest, statusUser, size, imgSrc}) => {
	const _renderStatus = (status) => {
		const className = `status${status}`;
		return <div className={style[className]} />
	}
	const _renderLoading = () => {
		return (
			<div className={`${style.avatarLoading} ${style[size]}`}>
				<div className={style.image} />
			</div>
		)
	}
	const _renderSuccess = () => {
		const url = "https://yt3.ggpht.com/a-/AAuE7mB3fAbzXqOP6_An4ADb6ykmjTqDbcH38xwvtw=s68-c-k-c0x00ffffff-no-rj-mo"
		return (
			<div className={`${style.avatar} ${style[size]}`}>
				<img className={style.image} src={imgSrc ? imgSrc : url} alt="avatar" />
				{statusUser && _renderStatus(statusUser)}
			</div>
		)
	}
	const _renderContent = () => {
		switch (statusRequest) {
			case "success":
				return _renderSuccess();
			case "loading":
				return _renderLoading();
			default:
				return null;
		}
	}
	return _renderContent();
})
Avatar.propTypes = {
	statusRequest: PropTypes.string,
	statusUser: PropTypes.string,
	size: PropTypes.string,
	imgSrc: PropTypes.string
}
Avatar.defaultProps = {
	statusRequest: "success",
	statusUser: '',
	size: 'medium',
	imgSrc: ''
}
export default Avatar
