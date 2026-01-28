import { CartesianGrid, Line, LineChart, XAxis, YAxis, Legend, Tooltip } from 'recharts';

function CustomTooltipInvest({ payload, label, active}) {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: '#404040',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '1px 2px 5px black',
        }}
      >
        <p className="label" style={{ margin: '0', fontWeight: '700' }}>{`Year ${label}`}</p>
        <p className="label" style={{ margin: '0', fontWeight: '700' }}>{`Invested Capital : £${payload[0].value}`}</p>
        <p className="label" style={{ margin: '0', fontWeight: '700' }}>{`Investment Value : £${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
}
function CustomTooltipInterest({ payload, label, active}) {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: '#404040',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '1px 2px 5px black',
        }}
      >
        <p className="label" style={{ margin: '0', fontWeight: '700' }}>{`Year ${label}`}</p>
        <p className="label" style={{ margin: '0', fontWeight: '700' }}>{`Interest : £${payload[0].value}`}</p>
        <p className="label" style={{ margin: '0', fontWeight: '700' }}>{`Total Interest : £${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
}

function InvestChart(props) {
    return(
        <div className='place-content-center'>
            <span className='text-center'><h1 className='mt-5'>Investment Charts:</h1></span>
            <span className='text-center'><h2>Investment Chart</h2></span>
            <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600, margin: 'auto' }} responsive data={props.results}>
                <CartesianGrid stroke='#e5e5e5' strokeDasharray={"5 5"}/>
                <Line dataKey="investedCapital" stroke='#0ea5e9' strokeWidth="2" name="Invested Capital"/>
                <Line dataKey="investmentValue" stroke='#22c55e' strokeWidth="2" name="Investment Value"/>
                <XAxis dataKey="year" label={{ value: "Year"}} />
                <YAxis width="auto" domain={['dataMin', 'auto']} label={{ value: "GBP (£)", position: "insideLeft", angle: -90}}/>
                <Tooltip content={CustomTooltipInvest}/>
                <Legend />
            </LineChart>
            <span className='text-center'><h2>Interest Chart</h2></span>
            <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600, margin: 'auto' }} responsive data={props.results}>
                <CartesianGrid stroke='#e5e5e5' strokeDasharray={"5 5"}/>
                <Line dataKey="interest" stroke='#dc2626' strokeWidth="2" name='Interest' />
                <Line dataKey="totalInterest" stroke='#ea580c' strokeWidth="2" name="Total Interest"/>
                <XAxis dataKey="year" />
                <YAxis width="auto" domain={['dataMin', 'auto']} label={{ value: "GBP (£)", position: "insideLeft", angle: -90}}/>
                <Tooltip content={CustomTooltipInterest}/>
                <Legend />
            </LineChart>
        </div>
    )
}

export default InvestChart;