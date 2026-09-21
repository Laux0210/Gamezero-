const paths = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z" />
      <path d="M8.2 7.7c.2-.4.4-.4.8-.4h.3c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.5 0 .7.5.9 1.3 1.7 2.2 2.2.3.2.5.2.7 0l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .5-.2 1.4-.7 1.9-.6.6-1.5.9-2.4.7-1.3-.3-3.1-1.1-4.8-2.7-1.3-1.3-2.2-2.9-2.5-4.2-.2-.9 0-1.6.4-2.1Z" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  console: (
    <>
      <path d="M8 7h8a5 5 0 0 1 4.7 6.7l-1.1 3.1a2 2 0 0 1-3.3.8L14.5 16h-5l-1.8 1.6a2 2 0 0 1-3.3-.8l-1.1-3.1A5 5 0 0 1 8 7Z" />
      <path d="M8 10v4m-2-2h4m6-1h.01M18 13h.01" />
    </>
  ),
  refresh: <path d="M20 7v5h-5M4 17v-5h5m9.6-3A7 7 0 0 0 6.2 6.4L4 9m16 6-2.2 2.6A7 7 0 0 1 5.4 15" />,
  headset: <path d="M4 14v-2a8 8 0 0 1 16 0v2m-16 0a2 2 0 0 1 2-2h2v7H6a2 2 0 0 1-2-2v-3Zm16 0a2 2 0 0 0-2-2h-2v7h2a2 2 0 0 0 2-2v-3Z" />,
  package: <path d="m4 7 8-4 8 4-8 4-8-4Zm0 0v10l8 4 8-4V7m-8 4v10" />,
  check: <path d="m5 12 4 4L19 6" />,
  shield: <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Zm-3-10 2 2 4-5" />,
  message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />,
  search: <path d="m21 21-4.3-4.3M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />,
  handshake: <path d="m8 12 3 3a2 2 0 0 0 3 0l4-4M3 8l4-3 4 3m10 0-4-3-4 3M6 17l2 2m2-2 2 2" />,
};

export function Icon({ name, className = "h-6 w-6" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
