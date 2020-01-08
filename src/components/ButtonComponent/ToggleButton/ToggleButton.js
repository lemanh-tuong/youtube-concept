import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import style from "./ToggleButton.module.scss";
class ToggleButton extends PureComponent {
  render() {
  	const { active, optimizeColor, colorActive, colorDefault, onEventClick } = this.props;
  	const styleActive = {backgroundColor: colorActive};
  	const styleDefault = {backgroundColor: colorDefault};
    return (
      <div
      className={`${style.toggleButton} ${!optimizeColor && active && style.active }`}
      style={active ? styleActive : styleDefault}
      onClick={onEventClick}
      />
    );
  }
}
ToggleButton.propTypes = {
	active: PropTypes.bool,
	optimizeColor: PropTypes.bool,
	colorActive: PropTypes.string,
	colorDefault: PropTypes.string,
	onEventClick: PropTypes.func
}
ToggleButton.defaultProps = {
	optimizeColor: false,
	colorDefault: '',
	colorActive: ''
}
export default ToggleButton;
