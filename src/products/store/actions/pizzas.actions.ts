import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

export const LOAD_PIZZAS = '[Products] Get Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Get Pizzas Fail';
export const LOAD_PIZZAS_SUCCSESS = '[Products] Get Pizzas Success';

// actions

export class LoadPizzas implements Action {
	readonly type = LOAD_PIZZAS;
}

export class LoadPizzasSuccess implements Action {
	readonly type = LOAD_PIZZAS_SUCCSESS;

	constructor(public payload: Array<Pizza>) {}
}

export class LoadPizzasFail implements Action {
	readonly type = LOAD_PIZZAS_FAIL;

	constructor(public payload: any) {}
}

// action types

export type PizzasActions = LoadPizzas
	| LoadPizzasSuccess
	| LoadPizzasFail
