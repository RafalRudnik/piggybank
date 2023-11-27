import BalanceStatus from "../features/account/BalanceStatus";
import LoanStatus from "../features/account/LoanStatus";
import WithdrawStatus from "../features/account/WithdrawStatus";

function DashOverview() {

  return (
    <div className="flex w-full flex-wrap items-center gap-1 md:flex-nowrap">
      <OverwievUnit>
        <BalanceStatus />
      </OverwievUnit>
      <OverwievUnit>
        <WithdrawStatus />
      </OverwievUnit>
      <OverwievUnit>
        <LoanStatus />
      </OverwievUnit>
    </div>
  );
}

export default DashOverview;

function OverwievUnit({ children }) {
  return <div className="w-full rounded-lg bg-white p-2">{children}</div>;
}
