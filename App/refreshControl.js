import React, {
  Component,
  StyleSheet,
  Text,
  View,
  WebView,
  RefreshControl,
  ScrollView,
} from 'react-native';


class refreshControl extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container2}>
				<ScrollView contentContainerStyle={styles.contentContainer}
					automaticallyAdjustContentInsets={false}
			        onScroll={() => { console.log('onScroll!'); }}
			        refreshControl={
		                <RefreshControl
		                	// style={{backgroundColor: 'yellow'}}
		                    tintColor="blue"
		                    title="Loading..."
		                    colors={['#ff0000', '#00ff00', '#0000ff']}
		                    progressBackgroundColor="#ffff00"/>
		                }>
			        <Text>
			            Welcome to React Native!
			        </Text>
		    	</ScrollView>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	contentContainer: {
    	flex: 1,
    	margin: 0,
    	backgroundColor: 'red',
    },

    container2: {
    	flex: 1,
    	marginTop: 64,
    }
});


export default refreshControl;
