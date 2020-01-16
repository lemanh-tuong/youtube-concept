import React, { memo } from 'react';
import PropTypes from 'prop-types';
import style from './SkeletonLoading.module.scss';
const _className = (type) => {
		switch (type) {
			case "header":
				return style.skeletonHeader;
			case "text":
				return style.skeletonText;
			case "optimize":
				return style.skeletonInitial;
		}
	}

const SkeletonLoading = memo (({ type, width, height, fontSize, style }) => {
	return <div className={_className(type)} style={style ? style : styleLoading} />
})
SkeletonLoading.propTypes = {
	type: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	fontSize: PropTypes.string,
	style: PropTypes.object
}
export default SkeletonLoading
