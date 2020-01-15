import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import style from './Avatar.module.scss';
class Avatar extends PureComponent {
	_renderStatus(status) {
		const className = `status${status}`;
		return <div className={style[className]} />
	}
	_renderSuccess() {
		const { statusUser, imgSrc, size} = this.props;
		const url = "https://yt3.ggpht.com/a-/AAuE7mB3fAbzXqOP6_An4ADb6ykmjTqDbcH38xwvtw=s68-c-k-c0x00ffffff-no-rj-mo"
		return (
			<div className={`${style.avatar} ${style[size]}`}>
				<img className={style.image} src={imgSrc ? imgSrc : url} alt="avatar" />
				{statusUser && this._renderStatus(statusUser)}
			</div>
		)
	}
	_renderLoading() {
		const { size } = this.props
		return (
			<div className={`${style.avatarLoading} ${style[size]}`}>
				<div className={style.image} />
			</div>
		)
	}
	_renderContent() {
		const { statusRequest } = this.props;
		switch (statusRequest) {
			case "success":
				return this._renderSuccess();
			case "loading":
				return this._renderLoading();
			default:
				return null;
		}
	}
	render() {
		return this._renderContent();
	}
}
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
