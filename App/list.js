/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Modal,
  TouchableHighlight,
  AlertIOS,
  Alert,
  Image,
  NativeModules,
} from 'react-native';

import Home from './Home'
import HomeListCell from './HomeListCell'
import Story from './Story'


var MCFileWriterUtil = NativeModules.MCFileWriterUtil;

export default class index extends Component {
    constructor(props) {
      super(props);

      var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

      this.state = {
        dataSource: ds.cloneWithRows([]),
        loaded: false,
        StoryID: 0,
      }
    }

    componentDidMount() {
        this.fetchTest();
    }


    testlog(rowData){
      this.props.navigator.push({
        title: 'aaaaa',
        component: Home,
        backButtonTitle: 'Custom Back',
      });
    }

    fetchTest(){
      fetch('http://news-at.zhihu.com/api/4/stories/latest?client=0')
      .then((response) => response.json())
      .then((responseText) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseText.stories),
            loaded: true,
            date: responseText.date,
          })
      }).done()
    }

    onPress(rowData) {
      // MCFileWriterUtil.helloTest('Ace')

      this.props.navigator.push({
        title: rowData.title,
        component: Story,
        backButtonTitle: 'Custom Back',
        passProps: { StoryID: rowData.id, },
      });
    }


    render() {
      // console.log(this.state.dataSource)
      if (!this.state.dataSource) {
        return <Text style={{height:50, backgroundColor: 'red', marginTop: 150}}>{'null'}</Text>
      };
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <TouchableHighlight onPress={()=> this.onPress(rowData)}>
              <View style={styles.cellContent}>
                <Text style={styles.cellLabel}>{rowData.title}</Text>
                <Image
                  style={styles.cellImage}
                  source={{uri: rowData.images[0]}} />
              </View>
            </TouchableHighlight>
          }
          renderSectionHeader={
            (sectionData, sectionID) => 
            <View style={styles.listHeader}>
              <Text style={styles.listHeaderText}>{this.state.date}</Text>
            </View>
          }/>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  listHeader: {
    backgroundColor: 'blue',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listHeaderText: {
    color: 'white',
    fontSize: 18,
  },

  cellContent: {
    height:80, 
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#F5F5F5',
    backgroundColor: 'white',
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
