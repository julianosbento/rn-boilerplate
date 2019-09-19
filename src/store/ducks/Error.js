/**
 * @author Juliano Bento <bento.js.it@gmail.com>
 * @copyright RN-Boilerplate
 * @version 1.0.0
 *
 */
export const ErrorTypes = {
  SET: 'error/SET',
  HIDE: 'error/HIDE',
};

const initialState = {
  visible: false,
  message: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ErrorTypes.SET:
      return { ...state, visible: true, message: action.payload.message };
    case ErrorTypes.HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
};

export const ErrorActions = {
  setError: message => ({ type: ErrorTypes.SET, payload: { message } }),
  hideError: () => ({
    type: ErrorTypes.HIDE,
  }),
};

export default reducer;
