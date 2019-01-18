/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return [...state,action.payload]
        default: return state;
    }
};