import Image from 'next/image';

type PreviewProps = {
  cardNumbers: string[];
  expirationDate: string[];
  cardName: string;
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
};

export const Preview = ({cardNumbers, expirationDate, cardName}: PreviewProps) => {
  const cardImage = getCardImage(cardNumbers[0]);

  return (
    <article className="flex flex-col w-56 h-32 bg-gray drop-shadow-md rounded-[4]" aria-label="카드 미리보기">
      <header className="flex justify-between items-center w-full px-3 py-2">
        <Image src="/images/icChip.svg" alt="icChip" width={36} height={22} />
        {cardImage && <Image src={cardImage} alt="card company" width={36} height={22} />}
      </header>
      <section className="flex flex-col w-full px-4 gap-2" aria-label="카드정보">
        <ul className="flex w-full h-5 gap-[10]" aria-label="카드번호">
          {cardNumbers.map((number, index) => (
            <p key={index} className="flex-1 font-medium text-sm/5 text-white tracking-widest">
              {index >= 2 ? '*'.repeat(number.length) : number}
            </p>
          ))}
        </ul>
        <p className="flex-1 h-5 font-medium text-sm/5 text-white tracking-widest" aria-label="유효기간">
          {expirationDate.every(expiration => expiration === '') ? '' : expirationDate.join('/')}
        </p>
        <p className="flex-1 h-5 font-medium text-sm/5 text-white tracking-widest" aria-label="소유자명">
          {cardName.toUpperCase()}
        </p>
      </section>
    </article>
  );
};
