import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import style from './SkeletonLoading.module.scss';
class SkeletonLoading extends PureComponent {
	_className() {
		const { type } = this.props;
		switch (type) {
			case "header":
				return style.skeletonHeader;
			case "text":
				return style.skeletonText;
			case "optimize":
				return style.skeletonInitial;
		}
	}
	render() {
		const { width, height, fontSize, style } = this.props;
		const styleLoading = {
			width: width ? width : null,
			height: height ? height : null,
			fontSize: fontSize ? fontSize : null,
		}
		return (
			<div className={this._className()} style={style ? style : styleLoading} />
		)
	}
}
SkeletonLoading.propTypes = {
	type: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	fontSize: PropTypes.string,
	style: PropTypes.object
}
export default SkeletonLoading
