import {focusedFieldAtom} from '@/jotai/card';
import {CardInputs} from '@/types/card';
import {useSetAtom} from 'jotai';

const useFocusedField = () => {
  const setFocusedField = useSetAtom(focusedFieldAtom);

  const handleFocus = (fieldName: keyof CardInputs) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return {handleFocus, handleBlur};
};

export default useFocusedField;
