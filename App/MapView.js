import { 
	NativeModules 
} from 'react-native'; 

var MCFileWriterUtil = NativeModules.MCFileWriterUtil; 

// MCFileWriterUtil.writeFile(
//     'MyFile.txt',                       // File name
//     'Some Text',                        // File contents
//     function errorCallback(results) {
//         alert('Error: ' + results);
//     },
//     function successCallback(results) {
//         alert('Success : ' + results);
//     }
// );