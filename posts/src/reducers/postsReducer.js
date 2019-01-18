const INITIAL_STATE = [];

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default: return state;
    }
};          