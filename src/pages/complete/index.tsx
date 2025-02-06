import Head from 'next/head';
import '../../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Complete() {
  const firstCardNumber = '5511';
  const cardBrand = 'BC카드';

  return (
    <>
      <Head>
        <title>Next Payments</title>
        <meta name="description" content="Next Payments" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center gap-7 w-full h-screen p-7">
        <div className="flex justify-center items-center w-[76] h-[76] bg-gray rounded-full">
          <Image src="/images/check.svg" alt="complete" width={32} height={20} />
        </div>
        <p className="font-bold text-2xl/7 text-center whitespace-pre-line">{`${firstCardNumber}로 시작하는\n${cardBrand}가 등록되었어요.`}</p>
        <Link
          href="/"
          className="w-full py-4 bg-gray rounded-md text-center font-bold text-white2 text-base/3 hover:bg-grayVariants active:bg-grayVariants"
        >
          확인
        </Link>
      </main>
    </>
  );
}
