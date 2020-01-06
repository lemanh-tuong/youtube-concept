import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import style from './Avatar.module.scss';
class Avatar extends PureComponent {
	_renderStatus(status) {
		const className = `status${status}`;
		return <div className={style[className]} />
	}
	render() {
		const {status, size} = this.props;
		return (
			<div className={style["avatar"]}>
					<img className={`${style.image} ${style[size]}`} src="https://yt3.ggpht.com/a-/AAuE7mB3fAbzXqOP6_An4ADb6ykmjTqDbcH38xwvtw=s68-c-k-c0x00ffffff-no-rj-mo" />
				{status && this._renderStatus(status)}
			</div>
		)
	}
}
Avatar.propTypes = {
	status: PropTypes.string,
	size: PropTypes.string,
	srcImg: PropTypes.string
}
export default Avatar