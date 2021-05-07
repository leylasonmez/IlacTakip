// Packages
import { combineReducers } from 'redux';
import {userReducer, USER_NAMESPACE} from '../Modules/Auth/Redux/UserRedux'

// Reducers
import { ThemeReducer, THEMING_NAMAESPACE } from '../Modules/Theming';
import { LocalizationReducer, LOCALIZATION_NAMESPACE } from '../Modules/Localization';

export default combineReducers({
  [USER_NAMESPACE]: userReducer,
  [THEMING_NAMESPACE]: ThemeReducer,
  [LOCALIZATION_NAMESPACE]: LocalizationReducer,
});


