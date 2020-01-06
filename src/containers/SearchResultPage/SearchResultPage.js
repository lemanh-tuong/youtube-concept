import React, { Component } from 'react';
import { AppContext } from '../../AppProvider';
import ListVideo from '../../components/ListVideo/ListVideo';
import style from './SearchResultPage.module.scss';
class SearchResultPage extends Component {
	render() {
		return (
			<div className={style.SearchResultPage}>
				<AppContext.Consumer>
		    		{({searchVideos}) => {
		    			return searchVideos ? <ListVideo listVideos={searchVideos} /> : <div>Loading</div>
		    		}}
		    	</AppContext.Consumer>
		    </div>
		)	
	}
}
export default SearchResultPage;