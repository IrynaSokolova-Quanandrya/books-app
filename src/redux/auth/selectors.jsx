export const selectUserName = (state) => {
    // Перевірка, чи існує state.auth.user і чи не є name null
    if (state.auth.user && state.auth.user.name !== null) {
      return state.auth.user.name;
    } else {
      return null; // Повертаємо null у випадку, якщо name або user є null
    }
  };
  
  export const selectUserEmail = (state) => {
    // Перевірка, чи існує state.auth.user і чи не є email null
    if (state.auth.user && state.auth.user.email !== null) {
      return state.auth.user.email;
    } else {
      return null; // Повертаємо null у випадку, якщо email або user є null
    }
  };
  
  export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
  
  export const selectIsReFreshing = (state) => state.auth.isReFreshing;

  export const selectUserId = (state) => {
    if (state.auth.user && state.auth.user.id !== null) {
      return state.auth.user.id;
    } else {
      return null; // Повертаємо null у випадку, якщо email або user є null
    }
  }
