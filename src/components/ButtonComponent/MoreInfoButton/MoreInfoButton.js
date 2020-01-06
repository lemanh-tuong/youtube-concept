import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import style from './MoreInfoButton.module.scss';
class MoreInfoButton extends PureComponent {
	render() {
		const { showMore, onEventClick } = this.props
		return (
			<div className={style.moreInfoButton}>
				<button className={style.button} onClick={onEventClick}>{showMore ? "Ẩn bớt" : "Hiển thị thêm"}</button>
			</div>
		)
	}
}
MoreInfoButton.propTypes = {
	showMore: PropTypes.bool,
	onEventClick: PropTypes.func
}
export default MoreInfoButton;