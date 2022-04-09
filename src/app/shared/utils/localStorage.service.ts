import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  set(key: any, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: any): any {
    try {
      return JSON.parse(localStorage.getItem(key) as any);
    } catch (e) {
      console.error('Error getting data from localStorage', e);
    }
  }
}
