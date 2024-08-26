import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="border p-4 rounded-lg border-slate-600 bg-slate-950">
      <h1 className="text-xl font-medium border-slate-600 border-b pb-2">
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
}