import { createAction, props } from '@ngrx/store';

export const fetchData = createAction('[API Component] set to fetched');
export const loadingData = createAction('[API Page] Employees Loaded Success', props<{ employees: any }>());
// increment, decrement and reset are all actions (declared as variables)
