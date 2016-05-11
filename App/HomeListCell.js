import React, { Component } from 'react-native';

const {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Alert,
  Image,
} = React;

class HomeListCell extends Component {
	onPress(rowData) {
		Alert.alert(
	        'Alert Title',
	        rowData.title,
	        [
	          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
	          {text: 'OK', onPress: () => console.log('OK Pressed')},
	        ]
	    )
	}

  render() {
    return (
	 	<View style={styles.cellContent}>
	 		<Text style={styles.cellLabel}>{this.props.rowData.title}</Text>
	 		<Image
	 		  style={styles.cellImage}
	 		  source={{uri: this.props.rowData.images[0]}} />
	 	</View>
    );
  }
}

var styles = StyleSheet.create({
	cellContent: {
		height:80, 
	 	flex: 1,
	 	flexDirection: 'row',
	 	borderBottomWidth: 1,
	 	borderColor: '#F5F5F5',
	},

	cellLabel: {
		flex: 3, 
		alignSelf: 'center',
		margin: 10,
	},

	cellImage: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center',
		height: 60,
		marginRight: 10,
	}

});


export default HomeListCell;
