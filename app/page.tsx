import Image from 'next/image';
import Counter from '@/components/Counter';
import NumberInput from '@/components/NumberInput';

const metadata = {
  title: 'learning vitest',
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1>vitest</h1>
      <Counter />
      <NumberInput />
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
