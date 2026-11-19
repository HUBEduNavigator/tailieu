/** Logo la bàn HUB EduNavigator, sao chép từ repo home để nhất quán nhận diện. */
export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
      <circle cx="32" cy="32" r="30" fill="#0f2a4a" />
      <circle cx="32" cy="32" r="24" fill="none" stroke="#f0b429" strokeWidth="2.5" />
      <g transform="rotate(40 32 32)">
        <path d="M32 10 38 32 32 54 26 32Z" fill="#f0b429" />
        <path d="M32 10 38 32 26 32Z" fill="#fbf9f4" />
      </g>
      <circle cx="32" cy="32" r="3" fill="#0f2a4a" />
    </svg>
  );
}
