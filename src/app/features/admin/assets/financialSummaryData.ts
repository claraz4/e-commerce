interface FinancialSummaryData {
  summaryTitle: string;
  summaryDuration: number;
  summaryMoney: number;
  growth: number;
  icon: string;
}

const totalSales = 16239;
const totalExpenses = 4270;

const color = "#F63D68";

const financialSummaryData: FinancialSummaryData[] = [
  {
    summaryTitle: "Total Sales",
    summaryDuration: 30,
    summaryMoney: totalSales,
    growth: 6,
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style="padding-left: 2px">
        <path fill=${color} d="m20.516 14.154l-6.362 6.362q-.245.242-.551.363t-.61.121t-.605-.121t-.546-.363L3.48 12.17q-.237-.217-.358-.518q-.121-.3-.121-.632V4.634q0-.674.472-1.154T4.635 3h6.386q.324 0 .629.131t.527.354l8.339 8.344q.25.245.364.551t.114.617t-.114.61t-.364.547m-7.075 5.654l6.361-6.362q.192-.192.192-.452t-.192-.452L11.266 4.02H4.635q-.27 0-.452.173Q4 4.366 4 4.635v6.38q0 .116.039.231q.038.116.134.212l8.364 8.35q.192.192.451.192q.26 0 .453-.192M6.55 7.558q.421 0 .714-.292t.294-.708q0-.425-.292-.722t-.708-.298q-.425 0-.722.295t-.297.717t.295.714t.716.294m5.489 4.48"
        stroke-width="0.5" stroke=${color} />
      </svg>
    `
  },
  {
    summaryTitle: "Total Expenses",
    summaryDuration: 30,
    summaryMoney: totalExpenses,
    growth: 2,
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28">
        <path fill=${color} d="M18.25 16.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM2.004 8.75A3.75 3.75 0 0 1 5.754 5H22.25A3.75 3.75 0 0 1 26 8.75v10.5A3.75 3.75 0 0 1 22.25 23H5.755a3.75 3.75 0 0 1-3.75-3.75zm3.75-2.25a2.25 2.25 0 0 0-2.25 2.25v.75H24.5v-.75a2.25 2.25 0 0 0-2.25-2.25zm-2.25 12.75a2.25 2.25 0 0 0 2.25 2.25H22.25a2.25 2.25 0 0 0 2.25-2.25V11H3.505z" />
      </svg>
    `
  },
  {
    summaryTitle: "Total Profit",
    summaryDuration: 30,
    summaryMoney: totalSales - totalExpenses,
    growth: -1,
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24">
        <g fill="none" stroke=${color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" color=${color}>
          <path d="M20.943 16.835a15.76 15.76 0 0 0-4.476-8.616c-.517-.503-.775-.754-1.346-.986C14.55 7 14.059 7 13.078 7h-2.156c-.981 0-1.472 0-2.043.233c-.57.232-.83.483-1.346.986a15.76 15.76 0 0 0-4.476 8.616C2.57 19.773 5.28 22 8.308 22h7.384c3.029 0 5.74-2.227 5.25-5.165" />
          <path d="M7.257 4.443c-.207-.3-.506-.708.112-.8c.635-.096 1.294.338 1.94.33c.583-.009.88-.268 1.2-.638C10.845 2.946 11.365 2 12 2s1.155.946 1.491 1.335c.32.37.617.63 1.2.637c.646.01 1.305-.425 1.94-.33c.618.093.319.5.112.8l-.932 1.359c-.4.58-.599.87-1.017 1.035S13.837 7 12.758 7h-1.516c-1.08 0-1.619 0-2.036-.164S8.589 6.38 8.189 5.8zm6.37 8.476c-.216-.799-1.317-1.519-2.638-.98s-1.53 2.272.467 2.457c.904.083 1.492-.097 2.031.412c.54.508.64 1.923-.739 2.304c-1.377.381-2.742-.214-2.89-1.06m1.984-5.06v.761m0 5.476v.764" />
        </g>
      </svg>
    `
  }
]

export {financialSummaryData};
