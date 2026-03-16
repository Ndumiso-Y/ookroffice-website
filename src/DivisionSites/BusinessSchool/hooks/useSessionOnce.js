import { useEffect, useState } from "react";

export default function useSessionOnce(key = "bsle_kgotla_seen") {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const seen = sessionStorage.getItem(key);
    if (!seen) setOpen(true);
  }, [key]);
  const close = () => {
    sessionStorage.setItem(key, "1");
    setOpen(false);
  };
  return { open, close };
}
