import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('tests on useForm', () => {
  const initialForm = {
    name: 'daqueme',
    email: 'daqueme@email.com',
  };

  test('should return default values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    // console.log(result.current);
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('should change name on form', () => {
    const newValue = 'Alejandro';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      // send target (emulating event) with required args
      onInputChange({ target: { name: 'name', value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test('should reset values on form', () => {
    const newValue = 'Alejandro';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      // send target (emulating event) with required args
      onInputChange({ target: { name: 'name', value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
