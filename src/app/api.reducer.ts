import { createReducer, on } from '@ngrx/store';
import { loadingData } from './api.actions';

export const initialState = {};

const _apiReducer = createReducer(
  initialState,
  on(loadingData, (state, { employees }) => ({ ...state, employees: employees }))
); 
 
export function apiReducer(state, action) {
  return _apiReducer(state, action);
}