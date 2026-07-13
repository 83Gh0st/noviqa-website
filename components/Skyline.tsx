import { cx } from "@/lib/utils";

export default function Skyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      className={cx("w-full h-full", className)}
      aria-hidden="true"
    >
      <g fill="currentColor">
        <rect x="0" y="140" width="46" height="80" />
        <rect x="55" y="110" width="30" height="110" />
        <rect x="95" y="150" width="40" height="70" />
        <rect x="150" y="90" width="22" height="130" />
        <polygon points="185,220 185,60 200,20 215,60 215,220" />
        <rect x="230" y="130" width="34" height="90" />
        <rect x="275" y="100" width="26" height="120" />
        <rect x="315" y="150" width="50" height="70" />
        <rect x="380" y="70" width="18" height="150" />
        <rect x="410" y="120" width="30" height="100" />
        <polygon points="460,220 460,40 478,10 496,40 496,220" />
        <rect x="520" y="135" width="36" height="85" />
        <rect x="565" y="95" width="24" height="125" />
        <rect x="600" y="150" width="55" height="70" />
        <rect x="668" y="60" width="16" height="160" />
        <rect x="695" y="115" width="28" height="105" />
        <polygon points="745,220 745,30 764,0 783,30 783,220" />
        <rect x="810" y="140" width="40" height="80" />
        <rect x="860" y="100" width="26" height="120" />
        <rect x="898" y="150" width="46" height="70" />
        <rect x="960" y="80" width="20" height="140" />
        <rect x="994" y="125" width="32" height="95" />
        <polygon points="1050,220 1050,50 1067,15 1084,50 1084,220" />
        <rect x="1110" y="135" width="34" height="85" />
        <rect x="1155" y="105" width="24" height="115" />
        <rect x="1190" y="150" width="50" height="70" />
        <rect x="1255" y="90" width="18" height="130" />
        <rect x="1285" y="130" width="30" height="90" />
        <rect x="1330" y="155" width="44" height="65" />
        <rect x="1390" y="115" width="26" height="105" />
      </g>
    </svg>
  );
}
