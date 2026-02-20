import Link from "next/link";

type BookDemoButtonProps = {
  href?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export default function BookDemoButton({
  href = "#",
  className,
  onClick,
  children = "Book a Demo",
  style,
}: BookDemoButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-full bg-[#008ADD] font-hk-grotesk text-white font-medium outline-none transition-colors hover:bg-[#007FCB] focus-visible:outline-none",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={classes}
      style={{
        boxShadow:
          "0 0 0 1px rgba(255, 255, 255, 0.22), 0px 0.6px 0.6px -1.25px #0702455C, 0px 2.29px 2.29px -2.5px #07024551, 0px 10px 10px -3.75px #07024520",
        ...style,
      }}
    >
      {children}
    </Link>
  );
}
