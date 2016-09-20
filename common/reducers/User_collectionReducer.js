import * as Types from '../contants/constants';
import merge from 'lodash/merge';

var collectionState = {
  dataRequesting: true,
  isDataRequestSucc: false,
  collectionData : null,
}

export function userCollectionReducer(state = collectionState, action) {
  switch (action.type) {
    case Types.COLLECTION:
      return merge({}, state, {
        dataRequesting: false,
        isDataRequestSucc: true,
        collectionData : action.data,
      })
      break;
    default:
      return merge({}, state, {
        dataRequesting: true,
        isDataRequestSucc: false,
        collectionData : null,
      })
  }

}
