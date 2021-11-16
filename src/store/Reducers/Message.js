import { NEW_MESSAGE } from '../Actions';

const initialState = {
  messages: [],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

export default messagesReducer;
