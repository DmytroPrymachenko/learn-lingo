export const selectUser = (state) => state.user.user;
export const selectUserName = (state) => (state.user ? state.user.name : null);
