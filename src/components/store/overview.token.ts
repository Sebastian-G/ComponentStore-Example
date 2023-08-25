import { inject } from '@angular/core';
import type { ComponentStore } from '@ngrx/component-store';
import { OverviewStore } from './overview.store';

export type OverviewFacade<C extends object = any> = Omit<
  OverviewStore,
  keyof ComponentStore<C>
>;

export const useOverviewStore = <C extends object = any>() =>
  inject(OverviewStore) as OverviewFacade<C>;
