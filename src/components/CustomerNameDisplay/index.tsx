import {cardInputs} from '@/jotai/card';
import {useAtomValue} from 'jotai';
import {containerStyle} from './styles';

const CustomerNameDisplay = () => {
  const customerName = useAtomValue(cardInputs).customerName;

  return <section css={containerStyle}>{customerName}</section>;
};

export default CustomerNameDisplay;
