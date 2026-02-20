"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import BookDemoButton from "./BookDemoButton";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

type MobileMenuProps = {
  items: NavItem[];
};

export default function MobileMenu({ items }: MobileMenuProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) {
        return;
      }

      const clickedButton = buttonRef.current?.contains(target);
      const clickedMenu = menuRef.current?.contains(target);

      if (!clickedButton && !clickedMenu) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        ref={buttonRef}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition-colors hover:bg-zinc-50"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {isOpen && isMounted
        ? createPortal(
            <div
              className="fixed inset-0 z-40 bg-white/50 backdrop-blur-sm"
              aria-hidden="true"
            />,
            document.body
          )
        : null}

      {isOpen ? (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="absolute left-0 right-0 top-full z-50 w-full border-t border-zinc-200 bg-white px-4 py-4 shadow-sm sm:px-6"
        >
          <nav aria-label="Mobile" className="space-y-3">
            {items.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = expandedItems.includes(item.label);
              const isActive = pathname === item.href || (item.children?.some(child => pathname === child.href));

              return (
                <div key={item.label} className="space-y-2">
                  {hasChildren ? (
                    <button
                      onClick={() => toggleExpand(item.label)}
                      className={`flex w-full items-center justify-between font-manrope text-[15px] font-medium leading-none tracking-normal transition-colors hover:text-[#008ADD] ${
                        isActive ? "text-[#008ADD]" : "text-black"
                      }`}
                    >
                      {item.label}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block font-manrope text-[15px] font-medium leading-none tracking-normal transition-colors hover:text-[#008ADD] ${
                        isActive ? "text-[#008ADD]" : "text-black"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}

                  {hasChildren && isExpanded && (
                    <div className="ml-4 space-y-2 border-l border-zinc-100 pl-4">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block font-manrope text-[14px] font-medium leading-none tracking-normal transition-colors hover:text-[#008ADD] ${
                            pathname === child.href ? "text-[#008ADD]" : "text-zinc-600"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="#"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[#D1D5DB] px-6 font-hk-grotesk text-[15px] font-medium text-[#374151] transition-colors hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <BookDemoButton
              className="h-14 w-full px-6 text-[15px]"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
