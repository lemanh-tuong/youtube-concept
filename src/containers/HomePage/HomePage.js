import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SideBarLeft from './SideBarLeft/SideBarLeft';
import SideBarRight from './SideBarRight/SideBarRight';
class HomePage extends PureComponent {
	componentDidMount() {
		window.scrollTo(0,0)
	}
	render() {
		return (
			<div className="HomePage">
				<div className="row">
					<div className="col-sm-12 col-md-9">
						<SideBarLeft />
					</div>
					<div className="col-sm-12 col-md-3">
						<SideBarRight />
					</div>
				</div>
			</div>
		)
	}
}
export default HomePage;
