/**
 * @author Juliano Bento <bento.js.it@gmail.com>
 * @copyright RN-Boilerplate
 * @version 1.0.0
 *
 */
import { Navigation } from 'react-native-navigation';
import Navigator from './Navigator';
import Views from './Views';
import { Colors } from '../config';

Views.register();

export default () => Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: Navigator.map.Example
            }
          }
        ],
        options: {
          layout: {
            orientation: ['portrait']
          },
          topBar: {
            title: {
              component: {
                name: Navigator.map.Bar
              }
            },
            visible: true,
            height: 60,
            background: {
              color: Colors.White
            }
          }
        }
      }
    }
  });
});
