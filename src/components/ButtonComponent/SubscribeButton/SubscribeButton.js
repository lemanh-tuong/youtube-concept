import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import style from './SubscribeButton.module.scss';
class SubscribeButton extends PureComponent {
	static propTypes = {
		subscribed: PropTypes.bool,
		onEventClick: PropTypes.func
	}
	render() {
		const { subscribed, onEventClick } = this.props;
		return (
			<div className="Subscribe">
				<button onClick={onEventClick} className={`${style.subscribeButton} ${subscribed && style.subscribed}`}>
					{subscribed ? "Hủy Đăng Ký" : "Đăng ký"}
				</button>
			</div>
		)
	}
}
export default SubscribeButton;
