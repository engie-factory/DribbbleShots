import fetchApiShots from '../services/apiFetch';

export function fetchShotsIsLoading(isLoading) {
  return {
    type: 'SHOTS_IS_LOADING',
    isLoading,
  };
}

export function fetchShotsHasErrored(hasErrored) {
  return {
    type: 'SHOTS_HAS_ERRORED',
    hasErrored,
  };
}

export function fetchShotsSuccess(shots) {
  return {
    type: 'FETCH_SHOTS_SUCCESS',
    shots,
  };
}

export function setShotsError(error) {
  return {
    type: 'SET_SHOTS_ERROR',
    error,
  };
}

export function fetchShots() {
  return (dispatch) => {
    dispatch(fetchShotsIsLoading(true));
    fetchApiShots.then(shots => {
      dispatch(fetchShotsIsLoading(false));
      dispatch(fetchShotsSuccess(shots.data))
    }).catch(err => {
      dispatch(fetchShotsIsLoading(false));
      dispatch(fetchShotsHasErrored(true));
      dispatch(setShotsError(err));
    });
  };
}