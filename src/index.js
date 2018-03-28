import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyD_5D5r_jHVwxydoUEqxTPhpCXk_o9Pl5M';

class App extends Component {
	constructor(props) {
		super(props);

		this.state={ 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('react.js');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
		   	});
		});
	}

	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<div className="row">
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
					</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
