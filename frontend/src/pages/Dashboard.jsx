import DashBoardHeader from "@/components/block/DashBoardHeader";
import Card from "@/components/block/Card";
import Amount from "@/components/block/Amount";
import { Bar } from "react-chartjs-2";

const Dashboard = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Example Dataset",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  };
  return (
    <div>
      <DashBoardHeader />
      <div className="flex gap-[50px] justify-center">
        <Card />
        <Amount />
        <Amount />
      </div>
      <div className="flex gap-[50px]">
        <div className="bg-gray-500">
          <div className="px-[24px] py-[16px]">Income - Expense</div>
          <div className="px-[24px] py-[32px]"></div>
        </div>
        <div className="bg-gray-500">
          <div className="px-[24px] py-[16px]">Income - Expense</div>
          <div>
            <h2>Bar Chart</h2>
            <div style={{ width: "80%", margin: "auto" }}>
              <Bar
                data={data}
                options={{
                  maintainAspectRatio: false, // Ensures the chart fills the container
                }}
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
