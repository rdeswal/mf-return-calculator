function Stats({ maturityAmount, investedAmount, interestEarnedAmount }) {
  const formatNumber = (number) => {
    return number && number !== "NaN" ? number.toLocaleString("en-IN") : "-";
  };

  return (
    <>
      <p className="text-center text-gray-500">
        Your total Maturity amount will be
      </p>
      <div className="mt-2 xl:mt-4">
        <h1 className="text-2xl text-center text-gray-900 font-semibold xl:text-4xl">
          <span className="mr-2 xl:mr-4">₹</span>
          {formatNumber(maturityAmount)}
        </h1>
      </div>
      <div className="flex flex-col text-center mt-2 md:justify-evenly md:flex-row md:items-center xl:mt-14">
        <div>
          <p className="text-center text-gray-500 text-sm">Invested Amount</p>
          <h2 className="text-2xl xl:text-3xl text-gray-900 font-semibold xl:mt-4">
            <span className="mr-2 xl:mr-4">₹</span>
            {formatNumber(investedAmount)}
          </h2>
        </div>
        <div>
          <p className="text-center text-gray-500 text-sm">Earnings on Investment</p>
          <h2 className="text-2xl xl:text-3xl text-gray-900 font-semibold xl:mt-4">
            <span className="mr-2 xl:mr-4">₹</span>
            {formatNumber(interestEarnedAmount)}
          </h2>
        </div>
      </div>
    </>
  );
}

export default Stats;
