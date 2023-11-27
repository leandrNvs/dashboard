"use client";

import { useFormStatus } from "react-dom";

interface ISubmit {
  text: string;
  className: string;
}

export default function Submit({ text, className }: ISubmit) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className={className}>
      {text}
    </button>
  );
}
