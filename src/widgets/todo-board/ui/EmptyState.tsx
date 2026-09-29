import Image from "next/image";

export function EmptyState() {
  return (
    <div className="flex items-center">
      <Image src="/empty.png" alt="" width={666} height={500} className="h-auto w-2/3" />
      <p className="w-1/3 text-xl italic">
        Empty as my motivation on Monday 😅.
        <br />
        Let&apos;s start adding stuff!
      </p>
    </div>
  );
}
