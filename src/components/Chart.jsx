import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";

function Chart() {
  const account = useSelector((store) => store.account);
  const deposits = useSelector((store) => store.account.depositHistory);
  const withdraws = useSelector((store) => store.account.withdrawHistory);

  const totalWithdraws = withdraws.reduce(function (prev, curr) {
    return prev + curr;
  });

  const allDeposits = !deposits.length
    ? 0
    : deposits.reduce(function (prev, curr) {
        return prev + curr;
      });

  //   const options = {
  //     layout: {
  //       padding: 120,
  //     },
  //   };

  const [chartData, setChartData] = useState({
    labels: ["Depostits", "Withdraws"],
    datasets: [
      {
        label: "ammount",
        data: [allDeposits, totalWithdraws],
        backgroundColor: ["rgb(160, 236, 177)", "rgb(240, 166, 167)"],
      },
    ],
  });

  if (!account.accountHistory) return null;

  return (
    <div className="mt-8 flex h-80 w-full flex-col items-center gap-5 rounded-lg bg-white px-4 py-5">
      <Pie data={chartData} />
    </div>
  );
}

export default Chart;
