import actionTypes from '../actions/action.types';
import { EMPTY_STRING } from '../../constants/string.constants';

export const initialState = {
    loaderEnabled: false,
    connectivity: EMPTY_STRING,
    songsData: [],
    groupedData: [],
    searchedData:[],
    searchText: EMPTY_STRING,
    isSearching: false,
    fetchError: false
  }

  export default GlobalReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SHOW_LOADER: {
        return {
          ...state,
          loaderEnabled: true,
        }
      }
      case actionTypes.HIDE_LOADER: {
        return {
          ...state,
          loaderEnabled: false,
        }
      }
      case actionTypes.FETCH_DATA: {
        return {
          ...state,
          loaderEnabled: true,
        }
    }
    case actionTypes.FETCH_SUCCESS: {

        return {
      ...state,
      loaderEnabled: false,
      fetchError: false,
      songsData: action.payload
      
        }
    }
    case actionTypes.SEARCH_TRIGGER: {
        return {
      ...state,
      isSearching: true,
      searchText: action.payload
      }
    }
    case actionTypes.SEARCH_RESET: {
        return {
      ...state,
      isSearching: false,
      searchedData: [],
      searchText: ''
      }
    }
    case actionTypes.SEARCH_RESULT: {
        return {
      ...state,
      searchedData: action.payload
      }
    }
    case actionTypes.FETCH_ERROR: {
        return {
          ...state,
          loaderEnabled: false,
          fetchError: true
        }
    }
    case actionTypes.UPDATE_DATA: {
        return {
          ...state,
          fetchError: false,
          groupedData: action.payload,
        }
    }
    
      default: return state;
    }
}