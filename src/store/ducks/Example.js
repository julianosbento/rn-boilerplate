/**
 * @author Juliano Bento <bento.js.it@gmail.com>
 * @copyright RN-Boilerplate
 * @version 1.0.0
 *
 */
export const ExampleTypes = {
  GET_REQUEST: 'example/GET_REQUEST',
  GET_SUCCESS: 'example/GET_SUCCESS',
};

const initialState = {
  data: 0,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ExampleTypes.GET_REQUEST:
      return { ...state, loading: true };
    case ExampleTypes.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data.subscriptions };
    default:
      return state;
  }
};

export const ExampleActions = {
  getExampleRequest: () => ({ type: ExampleTypes.GET_REQUEST }),
  getExampleSuccess: data => ({
    type: ExampleTypes.GET_SUCCESS,
    payload: { data },
  }),
};

export default reducer;
