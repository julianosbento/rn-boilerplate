/**
 * @author Juliano Bento <bento.js.it@gmail.com>
 * @copyright RN-Boilerplate
 * @version 1.0.0
 *
 */
import { Navigation } from 'react-native-navigation';
import Map from './Map';

class Navigator {
  static async navigateToAndSetStackRoot(from, to) {
    try {
      await Navigation.setStackRoot(from, {
        component: {
          name: to,
          options: {
            animations: {
              setStackRoot: {
                enabled: true
              }
            },
            topBar: {
              visible: false
            }
          }
        }
      });
    } catch (error) {
      throw error;
    }
  }

  static async navigateTo(from, to, props = {}) {
    try {
      Navigation.push(from, {
        component: {
          name: to,
          passProps: {
            ...props
          },
          options: {
            topBar: {
              visible: true
            }
          }
        }
      });
    } catch (error) {
      throw error;
    }
  }

  static map = Map;
}

export default Navigator;
