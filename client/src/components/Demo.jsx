import demo from "../images/demo.jpg";
import {
  PieChart,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Sector,
  Cell,
} from "recharts";
const data01 = [
  { name: " Mechanical Engineering", value: 23, fill: "#003399" },
  { name: "Civil Engineering", value: 20, fill: "#015100" },
  { name: "Computer Science and Engineering", value: 86, fill: "#FF6600" },
  { name: "Electrical Engineering", value: 62, fill: "#CE65DF" },
  // { name: 'Group E', value: 278, fill:'#AFCA54'},
  // { name: 'Group F', value: 189, fill:'#CE65DF'},
];
const data02 = [
  { name: " Mechanical Engineering", value: 25, fill: "#003399" },
  { name: "Civil Engineering", value: 21, fill: "#015100" },
  { name: "Computer Science and Engineering", value: 92, fill: "#FF6600" },
  { name: "Electrical Engineering", value: 51, fill: "#CE65DF" },
  { name: "Engineering Physics", value: 19, fill: "#990132" },
  { name: "Data Science and Engineering", value: 36, fill: "#7F7F7F" },
  { name: "Bio Engineering", value: 18, fill: "#ed1727" },
];
const data03 = [
  { name: "Bio Tech", value: 16, fill: "#003399" },
  { name: "STE", value: 13, fill: "#015100" },
  { name: "PED", value: 16, fill: "#FF6600" },
  { name: "CSP", value: 3, fill: "#CE65DF" },
  { name: "MES", value: 10, fill: "#990132" },
  { name: "VLSI", value: 14, fill: "#7F7F7F" },
  { name: "EEM", value: 12, fill: "#ed1727" },
];
const data04 = [
  { name: "PhD", value: 315, fill: "#003399" },
  // { name: "STE", value: 13, fill: "#015100" },
  // { name: "PED", value: 16, fill: "#FF6600" },
  // { name: "CSP", value: 3, fill: "#CE65DF" },
  // { name: "MES", value: 10, fill: "#990132" },
  // { name: "VLSI", value: 14, fill: "#7F7F7F" },
  { name: "MS", value: 62, fill: "#ed1727" },
];
const data05 = [
  { name: "Development Studies", value: 12, fill: "#ed1727" },
];
const data06 = [
  { name: "Chemistry", value: 42, fill: "#003399" },
  { name: "Physics", value: 27, fill: "#7F7F7F" },
  { name: "Applied Maths", value: 34, fill: "#ed1727" },
];
export const Demo = (props) => {
  return (
    // <div className="acadmic container demo blue">
    //   <h2 className="homehead">Student Demographics</h2>
    //   <img src={demo} className="demoimg" alt="Demographics" />
    // </div>
    <div id="demographics" className="Pie">
      <h3 className="h3">
        <center>Student Demographics</center>
      </h3>
      <h3 className="h3">
        <center>Number of Students in Each Stream</center>
      </h3>
      <center>
        <PieChart
          width={1000}
          height={400}
          margin={{ top: 0, right: 10, left: 250, bottom: 0 }}
        >
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#fff"
            label
          ></Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </center>

      {/* <PieChart
            width={1000}
            height={400}
            margin={{ top: 0, right: 10, left: -75, bottom: 0 }}
          >
          </PieChart> */}
      <br />
      <center>
        <PieChart
          width={1000}
          height={500}
          margin={{ top: 0, right: 10, left: 250, bottom: 0 }}
        >
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data02}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#fff"
            label
          ></Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </center>
      <br />
      <br />
      <center>
        <PieChart
          width={1000}
          height={500}
          margin={{ top: 0, right: 10, left: 250, bottom: 0 }}
        >
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data03}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#fff"
            label
          ></Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </center>
      <br />
      <br />
      <center>
        <PieChart
          width={1000}
          height={500}
          margin={{ top: 0, right: 10, left: 250, bottom: 0 }}
        >
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data04}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#fff"
            label
          ></Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </center>
      <br />
      <br />
      <center>
        <PieChart
          width={1000}
          height={500}
          margin={{ top: 0, right: 10, left: 250, bottom: 0 }}
        >
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data05}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#fff"
            label
          ></Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </center>
      <br />
      <br />
      <center>
        <PieChart
          width={1000}
          height={500}
          margin={{ top: 0, right: 10, left: 250, bottom: 0 }}
        >
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data06}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#fff"
            label
          ></Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </center>
      <br />
    </div>
  );
};
