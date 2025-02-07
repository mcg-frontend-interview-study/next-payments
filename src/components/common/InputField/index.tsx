import {InputContent} from '@/types/card';
import {containerStyle, errorMessageStyle, inputContainerStyle, labelStyle} from './styles';
import Input from '../Input';
import {useAtomValue, useSetAtom} from 'jotai';
import {cardInputs, setCardInput} from '@/jotai/card';
import useAutoFocus from '@/hooks/useAutoFocus';
import {isOnlyDigits} from '@/utils/number';
import {useState} from 'react';

interface InputFieldProps {
  inputContent: InputContent;
  validationFn?: (value: string) => boolean;
  errorMessage?: string;
  validationFnList?: Record<number, (value: string) => boolean>;
}

const InputField = ({inputContent, errorMessage, validationFn, validationFnList}: InputFieldProps) => {
  const [isTouched, setIsTouched] = useState(false);

  const {id, labelText, fieldName, content} = inputContent;
  const inputs = useAtomValue(cardInputs)[fieldName];
  const setInput = useSetAtom(setCardInput);

  const {inputRefs, focusNext} = useAutoFocus(content.length);

  const isValid = (index: number, value: string) => {
    if (!isTouched) return true;

    if (validationFnList) {
      return (validationFnList[index] && validationFnList[index](value)) ?? false;
    }

    return validationFn ? validationFn(value) : false;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number, maxLength: number) => {
    const {value} = e.target;

    setInput({field: inputContent.fieldName, index: idx, value});

    if (!isTouched) setIsTouched(true);
    if (value.length === maxLength) focusNext(idx);
  };

  return (
    <section css={containerStyle}>
      <label css={labelStyle} htmlFor={id}>
        {labelText}
      </label>

      <div id={id} css={inputContainerStyle}>
        {content.map((input, idx) => (
          <Input
            id={`${id}-${idx}`}
            key={`${id}-${idx}`}
            value={inputs?.[idx] ?? ''}
            ref={element => {
              inputRefs.current[idx] = element;
            }}
            type={input.type === 'number' ? 'text' : input.type}
            maxLength={input.length}
            placeholder={input.placeholder}
            onChange={e => handleInputChange(e, idx, input.length)}
            $isValid={!isTouched || isValid(idx, inputs?.[idx] ?? '')}
          />
        ))}
      </div>
      {isTouched && errorMessage && <p css={errorMessageStyle}>{errorMessage}</p>}
    </section>
  );
};

export default InputField;
