import { FETCHING_SMURF, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_FAIL, ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

export const smurfsReducer = (state = initialState, action) => {

  switch(action.type){
    case FETCHING_SMURF:
    return {
      ...state,
      fetchingSmurfs: true,
      error: null
    }
    case FETCHING_SMURF_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      fetchingSmurfs: false
    }
    case FETCHING_SMURF_FAIL:
    return {
      ...state,
      fetchingSmurfs: false,
      error: action.payload
    }


    //create new smurf!!!!!!!!!!!!!
    case ADD_SMURF_START:
    return {
      ...state,
      addingSmurf: true,
      error: null
    }
    case ADD_SMURF_SUCCESS:
    return {
      ...state,
      smurfs: [...state.smurfs, ...action.payload],
      addingSmurf: false
    }
    case ADD_SMURF_FAIL:
    return {
      ...state,
      addingSmurf: false,
      error: action.payload
    }

default: 
    return state;

  }
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
