import { renderHook, act } from '@testing-library/react';
import { useSearchTerm } from '@/hooks/useSearchTerm';

describe('useSearchTerm Hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with value from localStorage', () => {
    localStorage.setItem('searchTerm', 'initial value');

    const { result } = renderHook(() => useSearchTerm());

    expect(result.current[0]).toBe('initial value');
  });

  it('should initialize with empty string if localStorage is empty', () => {
    const { result } = renderHook(() => useSearchTerm());

    expect(result.current[0]).toBe('');
  });

  it('should update state and localStorage when setQuery is called', () => {
    const { result } = renderHook(() => useSearchTerm());

    act(() => {
      result.current[1]('new value');
    });

    expect(result.current[0]).toBe('new value');
    expect(localStorage.getItem('searchTerm')).toBe('new value');
  });

  it('should update localStorage when query changes', () => {
    const { result } = renderHook(() => useSearchTerm());

    act(() => {
      result.current[1]('another value');
    });

    expect(localStorage.getItem('searchTerm')).toBe('another value');
  });
});