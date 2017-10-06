const fetchShotsReducer = (state = null, action) => {
  switch (action.type) {
    // Check if action dispatched is
    case actionTypes.FETCH_SHOTS_SUCCESS:
      return action.shots;
    default:
      return state;
  }
};

// fetchShotsIsLoading
// SHOTS_IS_LOADING
// isLoading
const shotsIsLoadingReducer = (state = false, action) => {
  switch (action.type) {
    // Check if action dispatched is
    case actionTypes.SHOTS_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};

// fetchShotsHasErrored
// SHOTS_HAS_ERRORED
// hasErrored
const shotsHasErroredReducer = (state = false, action) => {
  switch (action.type) {
    // Check if action dispatched is
    case actionTypes.SHOTS_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
};

// setShotsError
// SET_SHOTS_ERROR
// error
const setShotsErrorReducer = (state = null, action) => {
  switch (action.type) {
    // Check if action dispatched is
    case actionTypes.SET_SHOTS_ERROR:
      return action.error;
    default:
      return state;
  }
};

export default {
  shots: fetchShotsReducer,
  shotsIsLoading: shotsIsLoadingReducer,
  shotsHasErrored: shotsHasErroredReducer,
  shotsError: setShotsErrorReducer
};
