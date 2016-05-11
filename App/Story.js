import React, {
  Component,
  StyleSheet,
  Text,
  View,
  WebView,
  RefreshControl,
  ScrollView,
} from 'react-native';

import refreshControl from './refreshControl'
// import MapView from './MapView'

class Story extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			url: 'http://news-at.zhihu.com/api/4/story/'+this.props.StoryID,
			jsonData: null,
		};
	}

	componentDidMount() {
		this.setupData(function (res) {
			console.log('aaaaaa'+res.share_url)
		})

		console.log(this.refs)
	}

	setupData(callback){
		fetch(this.state.url)
		.then((response) => response.json())
		.then((responseText) => {
			this.setState({
				jsonData: responseText,
	            url: responseText.share_url
	        });

	        callback(responseText)

		}).done()
	}

	render() {
		return (
			<View style={styles.container}>
				<WebView style={styles.webContainer} 
					source={{uri: this.state.url}}
					startInLoadingState={true}
					onLoadEnd={()=>{
						console.log('onLoadEnd')
					}}/>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'red',
	},

	webContainer:{
		flex: 1,
	},
});


export default Story;
