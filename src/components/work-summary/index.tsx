import {
    circle,
    container,
    monthContainer,
    monthDesc,
    monthRevContainer,
    monthText,
    revenueStyles,
    titleContainer,
    titleText,
} from './style'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { chartData } from '../../utils/constants'
ChartJS.register()
const WorkSummary = () => {
    return (
        <div className={container}>
            <div className={titleContainer}>
                <div>
                    <div className={titleText}>Your Work Summary</div>
                    <div className={monthText}>Nov - July</div>
                </div>
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                    <GraphOverViewConainer
                        color="#3855B3"
                        title="Last 6 months"
                        revenue={8620}
                    />
                    <GraphOverViewConainer
                        color="#FF6422"
                        title="Previous"
                        revenue={8620}
                    />
                </div>
            </div>
            <LineGraph />
        </div>
    )
}

export default WorkSummary

const LineGraph = () => {
    const { labels, datasets } = chartData
    return (
        <Line
            style={{
                width: '100%',
                maxHeight: '200px',
            }}
            data={{
                labels,
                datasets,
            }}
            options={{
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                responsive: true,
                spanGaps: true,
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: true,
                            color: (context) => {
                                if (context.tick.value % 2 === 0) {
                                    return '#dad8d8'
                                } else {
                                    return 'white'
                                }
                            },
                        },
                    },
                    y: {
                        display: true,
                        grid: {
                            display: false,
                        },
                        title: {
                            display: false,
                        },
                        ticks: {
                            stepSize: 25,
                        },
                        suggestedMin: 0,
                        suggestedMax: 75,
                    },
                },
            }}
        />
    )
}

const GraphOverViewConainer = ({
    color,
    title,
    revenue,
}: {
    color: string
    title: string
    revenue: number
}) => {
    return (
        <div className={monthRevContainer}>
            <div className={monthContainer}>
                <div className={circle(color)} />
                <div className={monthDesc}>{title}</div>
            </div>
            <div className={revenueStyles}>{`$ ${revenue}`}</div>
        </div>
    )
}
