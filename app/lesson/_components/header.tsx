type HeaderProps = {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};

export function Header({
  hearts,
  percentage,
  hasActiveSubscription,
}: HeaderProps) {
  return <div>Header</div>;
}
