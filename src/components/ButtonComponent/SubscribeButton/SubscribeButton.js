import React, { PureComponent } from 'react';
import style from './SubscribeButton.module.scss';
class SubscribeButton extends PureComponent {
	render() {
		return (
			<div className="Subscribe">
				<button className={style.subscribeButton}>
					Đăng ký
				</button>
			</div>
		)
	}
}
export default SubscribeButton;