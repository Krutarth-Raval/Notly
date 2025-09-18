import {  StickyNote } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2 select-none">
        <StickyNote size={30} strokeWidth={3}/>
    <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r dark:from-stone-100 dark:to-stone-600 from-stone-900 to-stone-600 bg-clip-text text-transparent ">Notely</h1>
    </div>
  );
};
