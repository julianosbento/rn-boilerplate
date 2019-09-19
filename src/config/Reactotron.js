/**
 * @author Juliano Bento <bento.js.it@gmail.com>
 * @copyright RN-Boilerplate
 * @version 1.0.0
 *
 */
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({
    host: '192.168.2.125',
  })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
}
