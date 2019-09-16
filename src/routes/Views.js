/**
 * @author Juliano Bento <bento.js.it@gmail.com>
 * @copyright RN-Boilerplate
 * @version 1.0.0
 *
 */
import { Navigation } from 'react-native-navigation';

import Navigator from './Navigator';
import BarView from '../views/bar/Bar';
import ExampleView from '../views/example/Example';

class Views {
  static register() {
    const views = [
      {
        name: Navigator.map.Bar,
        component: BarView,
        redux: false
      },
      {
        name: Navigator.map.Example,
        component: ExampleView,
        redux: false
      }
    ];

    views.forEach((view) => {
      const component = () => view.component;
      // eslint-disable-next-line no-unused-expressions
      view.redux
        ? Navigation.registerComponent(view.name, component)
        : Navigation.registerComponent(view.name, component);
    });
  }
}

export default Views;
