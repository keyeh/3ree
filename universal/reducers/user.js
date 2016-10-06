const initialState = {};

export default function user(state = initialState, action) {
	switch (action.type) {
		case 'USER_LOGGED_IN':
			console.log(action);
			return Object.assign({}, state, {
				token: action.payload.token,
				name: action.payload.name
			});
		case 'USER_LOGGED_OUT':
			return Object.assign({}, state, {
				token: null,
				name: null,
			});
		default:
      		return state;
	}
}