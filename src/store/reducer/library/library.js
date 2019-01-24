import { ADD_COMPONENT } from '../../action/library/library';

const libraryReducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_COMPONENT:
        return {
            ...state,
            [action.data.name]: action.data
        };

      default:
        return state;
    }
};

export default libraryReducer;
