import FormItem from '../common/FormItem';
import Dropdown, {DropdownItem} from '../common/Dropdown';
import {CARD_COMPANY} from '@/constants/card';
import useCardCompanyValidation from '@/hooks/card/useCardCompanyValidation';
import {useSetAtom} from 'jotai';
import {setCardCompanyAtom} from '@/jotai/card';
import {EnglishCardCompanyName, KoreanCardCompanyName} from '@/types/card';

const INFO = {
  title: '카드사를 선택해 주세요',
  description: '현재 국내 카드사만 가능합니다.',
};

const cardCompanyList: DropdownItem<EnglishCardCompanyName>[] = Object.entries(CARD_COMPANY).map(([key, value]) => ({
  id: value as KoreanCardCompanyName,
  value: key as EnglishCardCompanyName,
}));

const CardCompanyForm = () => {
  const setCardCompany = useSetAtom(setCardCompanyAtom);
  const {errorMessage} = useCardCompanyValidation();

  const handleDropdownSelect = (selectedValue: EnglishCardCompanyName) => {
    setCardCompany(selectedValue);
  };

  return (
    <FormItem title={INFO.title} description={INFO.description}>
      <Dropdown
        handleItemClick={handleDropdownSelect}
        id="card-company-dropdown"
        guideText="카드사를 선택해주세요"
        dropdownItemList={cardCompanyList}
      />
      {errorMessage}
    </FormItem>
  );
};

export default CardCompanyForm;
