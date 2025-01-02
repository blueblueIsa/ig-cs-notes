// import React from 'react';
import { NavLink } from 'react-router-dom';
import { Book, Code, Database, Cpu, Radio, PenTool } from 'lucide-react';

const navigation = [
  {
    title: 'Theory Track',
    items: [
      { name: 'Data Representation', href: '/theory/data-representation', icon: Database },
      { name: 'Data Transmission', href: '/theory/data-transmission', icon: Radio },
      { name: 'Hardware Architecture', href: '/theory/hardware', icon: Cpu },
    ],
  },
  {
    title: 'Programming Track',
    items: [
      { name: 'Operations', href: '/programming/operations', icon: Code },
      { name: 'Control Structures', href: '/programming/control-structures', icon: Book },
      { name: 'Basic Methods', href: '/programming/basic-methods', icon: PenTool },
    ],
  },
];

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside className={`${isOpen ? 'w-64' : 'w-0'}`}>
      <div className="h-screen w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
        <div className="space-y-4">
          {navigation.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {section.title}
              </h2>
              <nav className="mt-2 space-y-1">
                {section.items.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`
                    }
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}