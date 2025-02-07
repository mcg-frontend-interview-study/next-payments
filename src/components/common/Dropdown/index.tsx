import {dropdownStyle} from './styles';

export type DropdownItem<T extends string> = {
  id: string;
  value: T;
};

interface DropdownProps<T extends string> {
  name?: string;
  guideText?: string;
  ariaLabel?: string;
  id: string;
  dropdownItemList: DropdownItem<T>[];
  handleItemClick: (selectedValue: T) => void;
}

const Dropdown = <T extends string>({
  name,
  id,
  ariaLabel,
  dropdownItemList,
  guideText,
  handleItemClick,
}: DropdownProps<T>) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleItemClick(event.target.value as T);
  };

  return (
    <select defaultValue="" name={name} id={id} aria-label={ariaLabel} onChange={handleChange} css={dropdownStyle}>
      {guideText && (
        <option value="" disabled style={{color: 'gray'}}>
          {guideText}
        </option>
      )}
      {dropdownItemList.map(item => (
        <option id={item.value} key={item.value} value={item.value}>
          {item.id}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
