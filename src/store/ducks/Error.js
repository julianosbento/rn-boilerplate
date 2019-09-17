/**
 * @author Juliano Bento <bento.js.it@gmail.com>
 * @copyright RN-Boilerplate
 * @version 1.0.0
 *
 */
export const Types = {
  SET: 'SET',
  HIDE: 'HIDE',
};

const initialState = {
  visible: false,
  message: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET:
      return { ...state, visible: true, message: action.payload.message };
    case Types.HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
};

export const ActionCreators = {
  setError: message => ({ type: Types.SET, payload: { message } }),
  hideError: () => ({
    type: Types.HIDE,
  }),
};

export default reducer;
