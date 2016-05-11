import { 
	NativeModules 
} from 'react-native'; 

var CalendarManager = NativeModules.CalendarManager; 

CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');