import { MobileSidebar } from "@/components/mobile-sidebar";

export function MobileHeader() {
  return (
    <nav className="bg-green-500 h-[50px] px-6 lg:hidden flex items-center border-b fixed top-0 w-full z-50">
      <MobileSidebar />
    </nav>
  );
}
