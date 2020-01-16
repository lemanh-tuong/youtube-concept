import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SideBarLeft from './SideBarLeft/SideBarLeft';
import SideBarRight from './SideBarRight/SideBarRight';
import ErrorPage from '../ErrorPage/ErrorPage';
class HomePage extends PureComponent {
	componentDidMount() {
		window.scrollTo(0,0)
	}
	_render() {
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
	_renderContent() {
		const { statusRequest } = this.props;
		switch (statusRequest) {
			case "failure":
				return <ErrorPage />;
			default:
				return this._render();
		}
	}
	render() {
		return this._renderContent();
	}
}
const mapStateToProps = state => ({
	statusRequest: state.HomePageReducers.data.status
})
export default connect(mapStateToProps, null)(HomePage);
