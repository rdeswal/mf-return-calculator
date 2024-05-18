"use client";
import CalculatorSection from "@/components/calculator";
import Stats from "@/components/stats";
import Chart from "@/components/chart";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import Image from "next/image";
import { useState } from "react";
const theme = extendTheme({
  fonts: {
    heading: `'Poppins' sans-serif`,
    subHeading: `'Poppins' sans-serif`,
    body: `'Poppins' sans-serif`,
  },
});

export default function Home() {
  const [maturityAmount, setMaturityAmount] = useState(0);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [interestEarnedAmount, setInterestEarnedAmount] = useState(0);
  return (
    <main className="min-h-screen px-4 mt-8 xl:px-32 xl:pt-16">
      <div className="md:ml-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          Mutual Fund Returns Calculator
          <Image
            src="/favicon.svg"
            alt="logo"
            width={30}
            height={30}
            className="ml-2 inline-block"
          />
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-400">
          Calculate mutual fund returns with expense ratio
        </p>
      </div>
      <section className="flex flex-col mt-6 items-center xl:items-start xl:justify-around xl:flex-row xl:mt-16">
        <ChakraProvider theme={theme}>
          <div className="flex justify-center flex-col border w-full rounded-xl py-4 px-2 md:flex-row  xl:w-8/12 xl:mr-8 xl:py-10 bg-slate-50">
            <div className="w-full text-sm md:w-3/5 xl:w-8/12 md:text-base">
              <CalculatorSection
                maturityAmount={maturityAmount}
                setMaturityAmount={setMaturityAmount}
                investedAmount={investedAmount}
                setInvestedAmount={setInvestedAmount}
                interestEarnedAmount={interestEarnedAmount}
                setInterestEarnedAmount={setInterestEarnedAmount}
              />
            </div>
            <div className="md:mt-10 md:ml-14 xl:ml-12 xl:mt-10">
              <Chart
                investedAmount={investedAmount}
                interestEarnedAmount={interestEarnedAmount}
              />
            </div>
          </div>
          <div className="w-full md:w-2/4 mt-6 mb-6 py-4 px-4 xl:mt-0 text-sm border rounded-xl xl:w-2/6 xl:mr-8 xl:py-6 h-max bg-slate-50">
            <Stats
              maturityAmount={maturityAmount}
              investedAmount={investedAmount}
              interestEarnedAmount={interestEarnedAmount}
            />
          </div>
        </ChakraProvider>
      </section>
    </main>
  );
}
