import Image from 'next/image';
import {useCardFlippedContext} from '@/context/CardFlippedContext';

type PreviewProps = {
  cardNumbers: string[];
  expirationDate: string[];
  cardName: string;
  cardBrand: string;
  cvc: string;
};

const cardCompany = {
  isVisa: (firstNumber: string) => firstNumber.startsWith('4'),
  isMasterCard: (firstNumber: string) => {
    const frontTwoNumber = Number(firstNumber.slice(0, 2));
    return frontTwoNumber >= 51 && frontTwoNumber <= 55;
  },
};

const getCardImage = (firstNumber: string) => {
  if (cardCompany.isVisa(firstNumber)) return '/images/visa.svg';
  if (cardCompany.isMasterCard(firstNumber)) return '/images/mastercard.svg';
  return null;
};

const cardBrandBgColor: Record<string, string> = {
  BC카드: 'bg-bc',
  신한카드: 'bg-shinhan',
  카카오뱅크: 'bg-kakaobank',
  현대카드: 'bg-hyundai',
  우리카드: 'bg-woori',
  롯데카드: 'bg-lotte',
  하나카드: 'bg-hana',
  국민카드: 'bg-kb',
};

export const Preview = ({cardNumbers, expirationDate, cardName, cardBrand, cvc}: PreviewProps) => {
  const {isFlipped, setIsFlipped} = useCardFlippedContext();
  const cardImage = getCardImage(cardNumbers[0]);

  const cardBrandBackgroundColor = cardBrand === '' ? 'bg-gray' : cardBrandBgColor[cardBrand];

  return (
    <div
      className="relative w-56 h-32 cursor-pointer perspective"
      onClick={() => setIsFlipped(prev => !prev)}
      aria-label="카드 미리보기"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <article
          className={`absolute w-full h-full ${cardBrandBackgroundColor} drop-shadow-md rounded-[4] flex flex-col justify-between px-4 py-2 front backface-hidden`}
        >
          <header className="flex justify-between items-center">
            <Image src="/images/icChip.svg" alt="icChip" width={36} height={22} />
            {cardImage && <Image src={cardImage} alt="card company" width={36} height={22} />}
          </header>
          <section className="flex flex-col gap-2" aria-label="카드정보">
            <ul className="flex w-full justify-between" aria-label="카드번호">
              {cardNumbers.map((number, index) => (
                <p key={index} className="font-medium text-sm text-white tracking-widest">
                  {index >= 2 ? '*'.repeat(number.length) : number}
                </p>
              ))}
            </ul>
            <p className="font-medium text-sm text-white tracking-widest" aria-label="유효기간">
              {expirationDate.every(exp => exp === '') ? '' : expirationDate.join('/')}
            </p>
            <p className="font-medium text-sm text-white tracking-widest" aria-label="소유자명">
              {cardName.toUpperCase()}
            </p>
          </section>
        </article>

        <article className="absolute w-full h-full bg-lightGray rounded-[4] back rotate-y-180 backface-hidden">
          <p
            className="w-full h-6 mt-20 bg-yellow text-right px-4 font-medium text-sm text-white tracking-widest"
            aria-label="CVC"
          >
            {cvc}
          </p>
        </article>
      </div>
    </div>
  );
};
