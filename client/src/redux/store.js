// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {},
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch




// With Redux, the backend checks once at login, sends back the user object, Redux stores it, 
// and every component just reads from Redux instantly with no extra calls.

// User logs in
//      ↓
// Backend verifies → sends back { id, name, email, role }
//      ↓
// Redux stores that user object
//      ↓
// Navbar reads from Redux → shows correct buttons
// Dashboard reads from Redux → shows agent's data
// ProtectedRoute reads from Redux → allows or blocks access