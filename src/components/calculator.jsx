import { useState, useEffect } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Tooltip,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function CalculatorSection({
  setMaturityAmount,
  setInvestedAmount,
  setInterestEarnedAmount,
}) {
  const [monthlyInvestment, setMonthlyInvestment] = useState(20000);
  const [showTooltipMonthlyInvestment, setShowTooltipMonthlyInvestment] =
    useState(false);
  const [expectedReturns, setExpectedReturns] = useState(10);
  const [showTooltipExpectedReturns, setShowTooltipExpectedReturns] =
    useState(false);
  const [totalYears, setTotalYears] = useState(5);
  const [showTooltipYears, setShowTooltipYears] = useState(false);
  const [expenseRatio, setExpenseRatio] = useState(0.2);
  const [showTooltipExpenseRatio, setShowTooltipExpenseRatio] = useState(false);

  useEffect(() => {
    calculateAndUpdateAmount();
  }, [monthlyInvestment, expectedReturns, totalYears, expenseRatio]);

  const calculateAndUpdateAmount = () => {
    const investedAmount = monthlyInvestment * 12 * totalYears;
    const monthlyRate = expectedReturns / 100 / 12;
    const months = totalYears * 12;
    const futureValue = Math.floor(
      (monthlyInvestment *
        ((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate))) /
        monthlyRate
    );
    const interestAmount = Math.floor(futureValue - investedAmount);
    setMaturityAmount(futureValue);
    setInvestedAmount(investedAmount);
    setInterestEarnedAmount(interestAmount);
  };

  return (
    <>
      <h2 className="ml-2 md:ml-2 bg-emerald-500 text-white font-semibold inline-block rounded-md px-4 py-2">
        Systematic Investment Plannning (SIP)
      </h2>
      <div className="flex flex-col mt-8 px-2">
        <div className="flex justify-between">
          <h2>Monthly Investment</h2>
          <div className="bg-emerald-500 text-white rounded-md px-4 py-2 w-36 flex items-center">
            <div className="mr-2">₹</div>
            <NumberInput
              value={monthlyInvestment}
              step={500}
              defaultValue={500}
              min={500}
              max={100000}
              onChange={(valueString) => setMonthlyInvestment(valueString)}
              variant="unstyled"
              inputMode="numeric"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
        </div>
        <div className="mt-2">
          <Slider
            id="slider"
            value={monthlyInvestment}
            defaultValue={20000}
            step={500}
            min={500}
            max={100000}
            colorScheme="green"
            onChange={(v) => setMonthlyInvestment(v)}
            focusThumbOnChange={false}
            onMouseEnter={() => setShowTooltipMonthlyInvestment(true)}
            onMouseLeave={() => setShowTooltipMonthlyInvestment(false)}
          >
            <SliderTrack bg="green.100">
              <SliderFilledTrack bg="green.400" />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="green.500"
              color="white"
              placement="top"
              isOpen={showTooltipMonthlyInvestment}
              label={`${monthlyInvestment}`}
            >
              <SliderThumb boxSize={5}>
                <Box color="yellow" />
              </SliderThumb>
            </Tooltip>
          </Slider>
        </div>
      </div>
      <div className="flex flex-col mt-8 px-2">
        <div className="flex justify-between">
          <h2>Expected return rate (p.a)</h2>
          <div className="bg-emerald-500 text-white rounded-md px-4 py-2 w-36 flex items-center">
            <div className="mr-2">%</div>
            <NumberInput
              value={expectedReturns}
              step={0.1}
              defaultValue={10}
              min={1}
              max={30}
              onChange={(valueString) => setExpectedReturns(valueString)}
              variant="unstyled"
              inputMode="numeric"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
        </div>
        <div className="mt-2">
          <Slider
            id="slider"
            value={expectedReturns}
            defaultValue={10}
            min={1}
            step={0.1}
            max={30}
            colorScheme="green"
            focusThumbOnChange={false}
            onChange={(v) => setExpectedReturns(v)}
            onMouseEnter={() => setShowTooltipExpectedReturns(true)}
            onMouseLeave={() => setShowTooltipExpectedReturns(false)}
          >
            <SliderTrack bg="green.100">
              <SliderFilledTrack bg="green.400" />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="green.500"
              color="white"
              placement="top"
              isOpen={showTooltipExpectedReturns}
              label={`${expectedReturns}`}
            >
              <SliderThumb boxSize={5}>
                <Box color="green" />
              </SliderThumb>
            </Tooltip>
          </Slider>
        </div>
      </div>
      <div className="flex flex-col mt-8 px-2">
        <div className="flex justify-between">
          <h2>Investment Duration (in years)</h2>
          <div className="bg-emerald-500 text-white rounded-md px-4 py-2 w-36 flex items-center">
            <NumberInput
              value={totalYears}
              step={1}
              defaultValue={5}
              min={1}
              max={40}
              onChange={(valueString) => setTotalYears(valueString)}
              variant="unstyled"
              inputMode="numeric"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
        </div>
        <div className="mt-2">
          <Slider
            id="slider"
            defaultValue={5}
            value={totalYears}
            min={1}
            step={1}
            max={40}
            colorScheme="green"
            focusThumbOnChange={false}
            onChange={(v) => setTotalYears(v)}
            onMouseEnter={() => setShowTooltipYears(true)}
            onMouseLeave={() => setShowTooltipYears(false)}
          >
            <SliderTrack bg="green.100">
              <SliderFilledTrack bg="green.400" />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="green.500"
              color="white"
              placement="top"
              isOpen={showTooltipYears}
              label={`${totalYears}`}
            >
              <SliderThumb boxSize={5}>
                <Box color="green" />
              </SliderThumb>
            </Tooltip>
          </Slider>
        </div>
      </div>
      <div className="flex flex-col mt-8 px-2">
        <div className="flex justify-between">
          <h2>Expense Ratio</h2>
          <div className="bg-emerald-500 text-white rounded-md px-4 py-2 w-36 flex items-center">
            <NumberInput
              value={expenseRatio}
              step={0.01}
              defaultValue={0}
              min={0.01}
              max={3}
              onChange={(valueString) => setExpenseRatio(valueString)}
              variant="unstyled"
              inputMode="numeric"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
        </div>
        <div className="mt-2">
          <Slider
            id="slider"
            value={expenseRatio}
            step={0.01}
            defaultValue={0.2}
            min={0.01}
            max={3}
            colorScheme="green"
            focusThumbOnChange={false}
            onChange={(v) => setExpenseRatio(v)}
            onMouseEnter={() => setShowTooltipExpenseRatio(true)}
            onMouseLeave={() => setShowTooltipExpenseRatio(false)}
          >
            <SliderTrack bg="green.100">
              <SliderFilledTrack bg="green.400" />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="green.500"
              color="white"
              placement="top"
              isOpen={showTooltipExpenseRatio}
              label={`${expenseRatio}`}
            >
              <SliderThumb boxSize={5}>
                <Box color="green" />
              </SliderThumb>
            </Tooltip>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default CalculatorSection;
