import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import style from './ToggleMenuButton.module.scss';
class ToggleMenuButton extends PureComponent {
	render() {
		const { onClickToggleMenu } = this.props;
		return (
			<div className={style.ToggleMenuButton}>
				<button className={style.button} onClick={onClickToggleMenu}>
					<i className="fas fa-bars"></i>
				</button>
			</div>
		)
	}
}
ToggleMenuButton.propTyes = {
	onClickToggleMenu: PropTypes.func
}
export default ToggleMenuButton;