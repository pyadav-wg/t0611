import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  copyText(text: string): void {
    navigator.clipboard.writeText(text).then(() => console.log('text copied'))
    .catch(err => {
      console.log('error while copying text')
      console.log(err);
    });
  }
}
