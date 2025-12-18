'use client'
import { useState } from "react";


export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="text-2xl font-bold ">
        我在测试Cloudflare部署！
      </main>
    </div>
  );
}
