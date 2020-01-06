import React, { PureComponent } from 'react';
import SideBarLeft from './SideBarLeft/SideBarLeft';
import SideBarRight from './SideBarRight/SideBarRight';
class HomePage extends PureComponent {
	componentDidMount() {
		window.scrollTo(0,0);
	}
	render() {
		const { path, url } = this.props
		return (
			<React.Fragment>
				<div className="row">
					<div className="col-sm-12 col-md-9">
						<SideBarLeft url={url} path={path}/>
					</div>
					<div className="col-sm-12 col-md-3">
						<SideBarRight />
					</div>
				</div>
			</React.Fragment>
		)
	}
}
export default HomePage