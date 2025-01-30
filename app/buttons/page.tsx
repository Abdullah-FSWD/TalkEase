import { Button } from "@/components/ui/button";

function ButtonPage() {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[240px]">
      <Button>default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary outline</Button>
      <Button variant="secondary">Primary</Button>
      <Button variant="secondaryOutline">Primary outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="dangerOutline">Danger outline</Button>
      <Button variant="super">Super</Button>
      <Button variant="superOutline">Super outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="sidebar">Sidebar</Button>
      <Button variant="sidebarOutline">Sidebar outline</Button>
    </div>
  );
}

export default ButtonPage;
