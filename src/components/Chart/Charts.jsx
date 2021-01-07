import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from "react-chartjs-2";
import styles from './Charts.module.css'

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setdailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setdailyData(await fetchDailyData())
        }
        fetchApi()
        // console.log(dailyData)
    }, []);

    const lineChart = (
        dailyData.length !== 0 ?
            <Line data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: ' Infected',
                    borderColor: '#fdffbc',
                    backgroundColor: ' #edf39cd2',
                    fill: true
                }, {

                    data: dailyData.map(({ deaths }) => deaths),
                    label: ' deaths',
                    borderColor: '#f05454',
                    backgroundColor: ' #dc3f3fd1',
                    fill: true
                }]
            }} />
            : null
    );
    console.log(confirmed, recovered, deaths)
    const BarChart = (
        confirmed ? (
            <Bar

                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['#fdffbc', ' #c6ebc9', '#f05454'],
                            data: [confirmed.value, recovered.value, deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                }}
            />
        ) :
            null
    )

    return (
        <div className={styles.container}>
            {country ? BarChart : lineChart}
        </div>
    )
}

export default Charts