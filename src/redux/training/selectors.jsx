export const selectStartDate = state => state.training.startDate;
export const selectFinishDate = state => state.training.finishDate;
export const selectBooks = state => state.training.books;
export const selectSelectedBooks = state => state.training.selectedBooks;
export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectChekout = state => state.training.checkout;
export const selectIsStarted = state => state.training.isStarted;
export const selectPrevChekout = state => state.training.prevChekout;
export const selectIsLoading = state => state.training.isLoading;
export const selectTrainingId = state => state.training.id;
export const selectSize = state => state.training.size;

