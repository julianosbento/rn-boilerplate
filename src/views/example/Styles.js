/**
 * @author Juliano Bento <bento.js.it@gmail.com>
 * @copyright RN-Boilerplate
 * @version 1.0.0
 *
 */
import { StyleSheet } from 'react-native';

import { Colors } from '../../utils/'

export default StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  Welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  Instructions: {
    textAlign: 'center',
    color: Colors.ToryBlue,
    marginBottom: 5,
  },
});