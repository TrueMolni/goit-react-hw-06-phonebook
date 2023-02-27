import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import reducer from './reducers';

export const store = configureStore({ reducer });

export const persistor = persistStore(store);

//--------before--------

// // import { createStore } from 'redux';
// // import { configureStore } from '@reduxjs/toolkit';
// // import reducer from './reducers';

// // const store = createStore(
// //   reducer,
// //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// // );

// export default store;
