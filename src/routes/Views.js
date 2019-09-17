/**
 * @author Juliano Bento <bento.js.it@gmail.com>
 * @copyright RN-Boilerplate
 * @version 1.0.0
 *
 */
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import '../config/Reactotron';

import Navigator from './Navigator';
import store from '../store'

import BarView from '../views/bar/Bar';
import ExampleView from '../views/example/View';


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
        redux: true
      }
    ];

    views.forEach((view) => {
      const component = () => view.component;
      // eslint-disable-next-line no-unused-expressions
      view.redux
        ? Navigation.registerComponentWithRedux(view.name, component, Provider, store)
        : Navigation.registerComponent(view.name, component);
    });
  }
}

export default Views;
