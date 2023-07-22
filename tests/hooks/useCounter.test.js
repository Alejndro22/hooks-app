import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('tests on useCounter', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    // default value was set to 10 on hook
    expect(counter).toBe(10);
    // decrement, increment and reset should be functions
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('should generate counter with value = 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('should increment counter', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => {
      increment();
      // add another 2
      increment(2);
    });

    expect(result.current.counter).toBe(13);
  });

  test('should decrement counter', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    act(() => {
      decrement();
      // subtratct another 2
      decrement(2);
    });

    expect(result.current.counter).toBe(7);
  });

  test('should reset counter', () => {
    const { result } = renderHook(() => useCounter(0));
    const { increment, reset } = result.current;

    act(() => {
      increment(8);
      reset();
    });

    expect(result.current.counter).toBe(0);
  });
});
