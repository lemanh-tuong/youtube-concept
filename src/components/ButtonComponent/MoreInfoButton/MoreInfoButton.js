import React, { memo } from 'react';
import PropTypes from 'prop-types';
import style from './MoreInfoButton.module.scss';
const MoreInfoButton = memo (({ showMore, onEventClick }) => (
	<div className={style.moreInfoButton}>
		<button className={style.button} onClick={onEventClick}>{showMore ? "Ẩn bớt" : "Hiển thị thêm"}</button>
	</div>
))
MoreInfoButton.propTypes = {
	showMore: PropTypes.bool,
	onEventClick: PropTypes.func
}

export default MoreInfoButton;
