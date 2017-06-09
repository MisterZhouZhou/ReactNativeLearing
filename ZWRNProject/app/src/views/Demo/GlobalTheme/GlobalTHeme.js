import {AsyncStorage} from 'react-native'
import globalStyels from './styles';
const THEMEKEY = 'THEMEKEY';

var globalThme;
var defaultTheme;

export default class GlobalTHeme {
 static init(target) {
    if (!globalThme) {
        globalThme = new GlobalTHeme();
        globalThme.defaultTheme = globalStyels.defaultTHeme;
        globalThme.getTheme().then(result=> {
          target&&target.getCurrentTHeme(result);
        }).catch(error=> {
        });
    }
    return globalThme;
  }

  static setTheme(theme){
    AsyncStorage.setItem(THEMEKEY, JSON.stringify(theme), () => {});
  }

 getTheme(){
    return new Promise((resolve, reject)=> {
      AsyncStorage.getItem(THEMEKEY, (error, object) => {
        if (error) {
            console.log('error');
        } else {
          let style;
          object = JSON.parse(object);
          if(object == 'default'){
            reject('defalut');
          }
          else if(object == 'default1'){
            style = globalStyels.defaultTHeme1;
          }
          resolve(style);
        }
       });
    });
  }
}
