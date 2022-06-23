import { List } from 'phosphor-react';
import { Logo } from "./Logo";

interface HeaderProps {
  onToggleSidebar: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="w-full p-6 flex items-center lg:justify-center justify-between bg-gray-700 border-b border-gray-600 ">
      <Logo />

      <nav className="lg:hidden">
        <a href="#" className="flex items-center gap-2" onClick={onToggleSidebar}>
          Aulas
          <List size={32} className="text-blue-500"/>
        </a>
      </nav>
    </header>
  )
}