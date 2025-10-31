import {  StickyNote } from "lucide-react";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2 select-none">
      <>
  <Image
    src="/notely-dark.png"
    alt="Notely Logo"
    width={40}
    height={40}
    className="dark:hidden"
  />
  <Image
    src="/notely-light.png"
    alt="Notely Logo"
    width={40}
    height={40}
    className="hidden dark:block"
  />
</>
    <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r dark:from-stone-100 dark:to-stone-600 from-stone-900 to-stone-600 bg-clip-text text-transparent ">Notely</h1>
    </div>
  );
};
