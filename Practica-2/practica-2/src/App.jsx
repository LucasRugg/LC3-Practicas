import Table from "./components/Table";

const App = () => {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  const totalIncome = netIncomes.reduce(
    (total, item) => total + item.income,
    0
  );
  const averageIncome = totalIncome / netIncomes.length;
  const tableStyle = {
    border: "1px solid #ddd",
    marginLeft: 500,
  };

  return (
    <div style={tableStyle}>
      <Table data={netIncomes} />
      <hr />
      <p>
        <b>Average Net Income:</b> {averageIncome.toFixed(2)}
      </p>
    </div>
  );
};

export default App;
