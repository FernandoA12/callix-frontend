import { Logo } from "./Logo";

export function Header() {
  return (
    <div className="w-full  top-0 bg-[#121213] bg-opacity-10">
      <div className="w-full max-w-[200px] xl:max-w-xs">
        <Logo />
      </div>
    </div>
  );
}
