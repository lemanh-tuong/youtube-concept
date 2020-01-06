import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import style from "./ToggleButton.module.scss";
class ToggleButton extends PureComponent {
  render() {
  	const { active, onEventClick } = this.props;
    return (
      <div className={`${style.toggleButton} ${active && style.active}`} onClick={onEventClick}/>
    );
  }
}
ToggleButton.propTypes = {
	active: PropTypes.bool,
	onEventClick: PropTypes.func
}
export default ToggleButton;
