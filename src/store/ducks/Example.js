/**
 * @author Juliano Bento <bento.js.it@gmail.com>
 * @copyright RN-Boilerplate
 * @version 1.0.0
 *
 */
export const Types = {
  GET_REQUEST: 'GET_REQUEST',
  GET_SUCCESS: 'GET_SUCCESS',
};

const initialState = {
  data: 0,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data.subscriptions };
    default:
      return state;
  }
};

export const ActionCreators = {
  getExampleRequest: () => ({ type: Types.GET_REQUEST }),
  getExampleSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};

export default reducer;
