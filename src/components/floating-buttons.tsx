import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/919999999999?text=Hi%20Aarav%2C%20I%27d%20like%20to%20discuss%20a%20website%20project.";

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl animate-glow-pulse hover:scale-110 transition-transform"
        style={{ boxShadow: "0 10px 40px -5px rgba(37,211,102,0.6)" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-24 right-6 z-50 grid h-11 w-11 place-items-center rounded-full glass-strong transition-all ${
          show ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-2"
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </>
  );
}
