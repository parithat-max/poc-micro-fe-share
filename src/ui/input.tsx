"use client";

import type { ReactNode } from "react";

export interface InputProps {
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
  type?: "text" | "email" | "password" | "number" | "search";
  className?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  label,
  placeholder,
  icon,
  type = "text",
  className = "",
  id,
  name,
  value,
  onChange,
}: InputProps) {
  const inputId = id ?? `input-${name ?? Math.random().toString(36).slice(2)}`;

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-zinc-700">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-3 text-zinc-400 pointer-events-none">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={
            icon
              ? "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 pl-10 text-sm placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
              : "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
          }
        />
      </div>
    </div>
  );
}
