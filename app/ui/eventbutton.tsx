"use client";

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function EventButtonComponent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleClick(key: string, value: string) {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="flex flex-row w-full mt-20 mb-20">
      <button onClick={() => handleClick("isOpen", "true")}>Open</button>
      <button onClick={() => handleClick("isOpen", "false")}>Closed</button>
    </div>
  );
}
