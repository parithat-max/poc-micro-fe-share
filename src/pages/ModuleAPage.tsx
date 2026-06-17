"use client";

import { Button } from "../ui";

export default function ModuleAPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button appName="module-a" className="bg-amber-900 px-3 py-1">
        Hello from Module A
      </Button>
    </div>
  );
}
