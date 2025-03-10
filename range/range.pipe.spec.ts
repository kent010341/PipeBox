import { RangePipe } from './range.pipe';

describe('RangePipe', () => {
  let pipe: RangePipe;

  beforeEach(() => {
    pipe = new RangePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should generate a range from 0 to stop-1', () => {
    expect(pipe.transform(5)).toEqual([0, 1, 2, 3, 4]);
    expect(pipe.transform(3)).toEqual([0, 1, 2]);
  });

  it('should generate a range from start to stop-1', () => {
    expect(pipe.transform(2, 5)).toEqual([2, 3, 4]);
    expect(pipe.transform(10, 15)).toEqual([10, 11, 12, 13, 14]);
  });

  it('should generate a range with a custom step', () => {
    expect(pipe.transform(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
    expect(pipe.transform(0, 20, 5)).toEqual([0, 5, 10, 15]);
  });

  it('should generate a descending range when step is negative', () => {
    expect(pipe.transform(10, 1, -2)).toEqual([10, 8, 6, 4, 2]);
    expect(pipe.transform(5, -5, -2)).toEqual([5, 3, 1, -1, -3]);
  });

  it('should return an empty array if start equals stop', () => {
    expect(pipe.transform(5, 5)).toEqual([]);
    expect(pipe.transform(10, 10)).toEqual([]);
  });

  it('should return an empty array if step does not allow progression', () => {
    expect(pipe.transform(5, 10, -1)).toEqual([]);
    expect(pipe.transform(10, 5, 1)).toEqual([]);
  });

  it('should throw an error when step is zero', () => {
    expect(() => pipe.transform(0, 10, 0)).toThrowError('Step cannot be zero');
    expect(() => pipe.transform(5, 5, 0)).toThrowError('Step cannot be zero');
  });
});
