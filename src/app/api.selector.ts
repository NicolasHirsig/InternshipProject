import { createSelector } from '@ngrx/store';
 
export interface FeatureState {
  counter: number;
}
 
export interface AppState {
  feature: FeatureState;
  employees: any;
}
 
export const selectFeature = (state: AppState) => state.feature;

export const selectEmployee = (state: AppState) => state.employees;

 
export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.counter
);