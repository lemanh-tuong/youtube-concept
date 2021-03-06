import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import style from './Scroll.module.scss';
class Scroll extends PureComponent {
  scrollElem = React.createRef();
  _handleScroll = () => {
  	const { statusRequest, nowLength, maxLength, next, query } = this.props;
    const nowPosition = window.pageYOffset;
    const innerHeight = window.innerHeight;
    const elemHeight = this.scrollElem.current.clientHeight;
    const elemOffsetTop = this.scrollElem.current.offsetTop;
    if (nowPosition + innerHeight >= elemHeight + elemOffsetTop - 100) {
      statusRequest === "success" && nowLength < maxLength && next && next(query);
    }
  };
  componentDidMount() {
    const { hasMore } = this.props;
    hasMore && window.addEventListener("scroll", this._handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this._handleScroll);
  }
  _renderLoadDefault() {
    const className = this.props.statusRequest === "loading" ? style.loading : style.loaded
    return (
      <div className={`${style.Load} ${className}`} >
        <div className={style.dualRing} />
      </div>
    )
  }
  render() {
    return (
      <div ref={this.scrollElem} className="scroll">
        {this.props.children}
        {this.props.withLoader && this.props.loader ? this.props.loader() : this._renderLoadDefault()}
      </div>
    );
  }
}
Scroll.propTypes = {
  statusRequest: PropTypes.string,
  hasMore: PropTypes.bool,
  withLoader: PropTypes.bool,
  loader: PropTypes.func,
  next: PropTypes.func,
  nowLength: PropTypes.number,
  maxLength: PropTypes.number
}
export default Scroll;
