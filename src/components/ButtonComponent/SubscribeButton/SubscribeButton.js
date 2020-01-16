import React, { memo } from 'react';
import PropTypes from 'prop-types';
import style from './SubscribeButton.module.scss';
const SubscribeButton = memo (({ subscribed, onEventClick }) => (
		<div className="Subscribe">
			<button onClick={onEventClick} className={`${style.subscribeButton} ${subscribed && style.subscribed}`}>
				{subscribed ? "Hủy Đăng Ký" : "Đăng ký"}
			</button>
		</div>
))

SubscribeButton.propTypes = {
	subscribed: PropTypes.bool,
	onEventClick: PropTypes.func
}
export default SubscribeButton;
