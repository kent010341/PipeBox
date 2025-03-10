import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generates a numeric range for *ngFor, similar to Python's range().
 * Optimized for `range(stop)`, but also supports `range(start, stop, step)`.
 */
@Pipe({
  name: 'range',
  standalone: true
})
export class RangePipe implements PipeTransform {

  // Overload signatures for better type inference
  transform(stop: number): number[];
  transform(start: number, stop: number): number[];
  transform(start: number, stop: number, step: number): number[];

  /**
   * Generates an array from `start` to `stop - 1`, incrementing by `step`.
   * Optimized for `range(stop)`, using `Array.from` for better performance.
   * If `step === 0`, an error is thrown to prevent infinite loops.
   */
  transform(startOrStop: number, stop?: number, step: number = 1): number[] {
    if (stop === undefined) {
      // Optimized case: range(stop) -> use Array.from for better performance
      return Array.from({ length: startOrStop }, (_, i) => i);
    }

    // General case: range(start, stop, step)
    const start = startOrStop;
    if (step === 0) {
      throw new Error('Step cannot be zero');
    }

    const result: number[] = [];
    if (step > 0) {
      for (let i = start; i < stop; i += step) {
        result.push(i);
      }
    } else {
      for (let i = start; i > stop; i += step) {
        result.push(i);
      }
    }

    return result;
  }
}