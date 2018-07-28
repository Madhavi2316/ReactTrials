import { createStore } from 'redux';
import rootReducer from '../Reducers/index';

const ConfigureStore = createStore(rootReducer);

export default ConfigureStore;