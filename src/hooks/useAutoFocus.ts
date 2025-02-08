import {useRef} from 'react';

const useAutoFocus = (length: number) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>(new Array(length).fill(null));

  const focusNext = (idx: number) => {
    if (inputRefs.current[idx + 1]) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  return {inputRefs, focusNext};
};

export default useAutoFocus;
