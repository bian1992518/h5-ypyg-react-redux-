import * as Types from '../contants/constants';
import merge from 'lodash/merge';

const classifyData = {
  dataRequesting: true,
  isDataRequestSucc: false,
  data : null,
}

export default function ClassifyReducer(state = classifyData, action) {
  switch(action.type) {
    case Types.GOT_CLASSIFY_DATA:
      return merge({}, state, {
        dataRequesting: false,
        data: action.data,
        isDataRequestSucc: true
      });
    default:
      return (state);
  }
}
