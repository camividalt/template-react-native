import * as actionTypes from '../../../data/services/actions/types';
import {updateObject} from '../../../utilities/ObjectTools';

// initial State
const initialState = {
    isSurveyAnswered: false,
  };

  export const markSurveyAnswered = (isAnswered) => {
    return {
      type: actionTypes.MARK_SURVEY_ANSWERED,
      isSurveyAnswered: isAnswered
    };
  };

// Reducer Functions
const setSurveyReducer = (state, action) => {
    return updateObject(state, {isSurveyAnswered: action.isSurveyAnswered});
}; 

// reducer  
const reducer = (state = initialState, action) => {
switch (action.type) {
    case actionTypes.MARK_SURVEY_ANSWERED:
    return setSurveyReducer(state, action);  
    default:
    return state;
}
};

export default reducer;