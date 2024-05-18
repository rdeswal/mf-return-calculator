import { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";

function Chart({ interestEarnedAmount, investedAmount }) {
  const [dataMock, setDataMock] = useState();

  useEffect(() => {
    const dataForInvestedAmount = {
      title: "Invested Amt.",
      value: investedAmount,
      color: "#49BA82",
    };
    const dataForIterestEarnedAmount = {
      title: "Est. Returns",
      value: interestEarnedAmount,
      color: "#6EE7B7",
    };

    const finalData = [];
    finalData.push(dataForInvestedAmount, dataForIterestEarnedAmount);
    setDataMock(finalData);
  }, [, interestEarnedAmount, investedAmount]);

  return (
    <>
      <div className="ml-8 xl:ml-2">
        <div className="mt-8">
          <p className="text-sm">
            {" "}
            <span className="w-4 h-2.5 mr-2 rounded-xl bg-emerald-600 inline-block"></span>
            Invested Amount
          </p>
        </div>
        <div className="mt-2">
          <p className="text-sm">
            {" "}
            <span className="w-4 h-2.5 mr-2 rounded-xl bg-emerald-300 inline-block"></span>
            Est. Returns
          </p>
        </div>
      </div>

      <PieChart
        style={{ height: "220px", marginTop: "3rem" }}
        data={dataMock}
        lineWidth={18}
        paddingAngle={1}
      />
    </>
  );
}

export default Chart;
