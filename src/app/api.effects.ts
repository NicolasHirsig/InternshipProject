import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from './services/api.service';

@Injectable()
export class ApiEffects {

    loadEmployees$ = this.actions$.pipe(
        ofType('[API Component] set to fetched'),
        mergeMap(() => this.apiService.getData().pipe(
            map(employees => ({ type: '[API Page] Employees Loaded Success', payload: employees })),
            catchError(() => EMPTY)
        ))
    );

    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) { }
}
