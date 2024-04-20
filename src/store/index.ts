import {configureStore} from '@reduxjs/toolkit';
import chaptersSlice from '../features/Chapters/chaptersSlice';
import chapterSlice from '../features/Chapter/chapterSlice';

export const store = configureStore({
  reducer: {
    chapters: chaptersSlice,
    chapter: chapterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
