import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';

@Pipe({
  name: 'smartSelect',
})
export class MockSmartSelectPipe implements PipeTransform {
  transform() {
    return of('mock-value');
  }
}
