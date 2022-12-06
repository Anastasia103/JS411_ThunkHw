import React from 'react'
import PieChart from 'react-minimal-pie-chart';
import {Container} from '@mui/material'

function Legend() {
    return (
        <h6>Horsepower: &nbsp;
            <span style={{background: '#C13C37'}}>
                &nbsp;
                &nbsp;
                &nbsp;
            </span>
            &nbsp;
            <span>Over 200</span>
            &nbsp;
            <span style={{background: '#E38627'}}>
                &nbsp;
                &nbsp;
                &nbsp;
            </span>
            &nbsp;
            <span>Under 200</span>
        </h6>
    )
}

const Chart = (props) => {
    let over = props.cars.filter(car => car.horsepower >= 200).length
    let under = props.cars.filter(car => car.horsepower < 200).length
    // create variable "over" with all the cars whose horsepower is >= 200
    // create variable "under" with all the cars whose horsepower is < 200
    return (
        <Container>
            {/* Pie Chart Breaks demo leaving it out for now  */}
            {/* <PieChart 
                style={{ width: '200px' }}
                data={[
                    { title: 'Over', value: over, color: '#C13C37' },
                    { title: 'Under', value: under, color: '#E38627' }
                  ]}
                label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                labelStyle={{
                    fill: 'white',
                    fontSize: 'small'
                }}
                background = "#C13C37"
            /> */}
            <Legend />
        </ Container>
    )
}


export default Chart