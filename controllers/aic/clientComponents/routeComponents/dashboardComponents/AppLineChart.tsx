import { LineChart, Line, CartesianGrid, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import useThemeContext from '../../../../client/clientComponents/context/theme';
const data = [{name: 'Facebook', uv: 400, pv: 2400, amt: 2400}, {name: 'Instagram', uv: 200, pv: 2400, amt: 2400}, {name: 'Tiktok', uv: 890, pv: 2400, amt: 2400}];

const AppLineChart = () => {
  const theme = useThemeContext()
  const classes = `${theme.classes.container} ${theme.classes.border} p-10 rounded-3xl shadow-xl`

  return (
    <div className={classes}>
      <ResponsiveContainer width={600} height={300}>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
          <Line dataKey="uv" type="monotone" strokeWidth={2} name='Number of links created'/>
          <XAxis dataKey="name" />
          <YAxis />
          <Legend align='left'/>
          <Tooltip />
        </LineChart>

      </ResponsiveContainer>
    </div>
  )
}

export default AppLineChart
