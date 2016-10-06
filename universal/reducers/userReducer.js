const initialState = {
  user: {}
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case 'USER_LOGGED_IN':
			console.log(action);
			return Object.assign({}, state, {
				user: action.payload
			});
		case 'USER_LOGGED_OUT':
			return Object.assign({}, state, {
				user: {}
			});
	}
}