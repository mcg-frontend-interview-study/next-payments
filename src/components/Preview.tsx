import Image from 'next/image';

export const Preview = () => {
  return (
    <article className="flex flex-col w-56 h-32 bg-gray drop-shadow-md rounded-[4]" aria-label="카드 미리보기">
      <header className="flex justify-between items-center w-full px-3 py-2">
        <Image src="/images/icChip.svg" alt="icChip" width={36} height={22} />
        <Image src="/images/mastercard.svg" alt="icChip" width={36} height={22} />
      </header>
      <section className="flex flex-col w-full px-4 gap-2" aria-label="카드정보">
        <ul className="flex w-full gap-[10]" aria-label="카드번호">
          {[5555, 5555, 5555, 5555].map((number, index) => (
            <p key={index} className="flex-1 font-medium text-sm/5 text-white tracking-widest text-center">
              {number}
            </p>
          ))}
        </ul>
        <p className="flex-1 font-medium text-sm/5 text-white tracking-widest" aria-label="유효기간">
          04/21
        </p>
        <p className="flex-1 font-medium text-sm/5 text-white tracking-widest" aria-label="소유자명">
          JOHN DAE
        </p>
      </section>
    </article>
  );
};
