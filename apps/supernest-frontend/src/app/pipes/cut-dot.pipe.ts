import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutDot',
})
export class CutDotPipe implements PipeTransform {
  transform(value: string, size = 3): string {
    if (value)
      return value.slice(0, size) + '...' + value.slice(value.length - size);

    return '';
  }
}
