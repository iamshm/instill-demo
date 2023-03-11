import { ICardsDummyData } from './interface'

export const bl = 'bl'
export const trendIconPath = {
    up: '../assets/trend-icon/up.png',
    down: '../assets/trend-icon/down.png',
}
export const cardsDummyData: ICardsDummyData[] = [
    {
        name: 'Jane Smith',
        profileImage: '../assets/profile-images/1.png',
        description: 'Sales Manager - France',
        trend: 'up',
        completedTasks: 3,
        totalTasks: 6,
        revenue: 5430,
    },
    {
        name: 'Nadeem Issac',
        profileImage: '../assets/profile-images/2.png',
        description: 'Sales Manager - France',
        trend: 'down',
        completedTasks: 1,
        totalTasks: 6,
        revenue: 390,
    },
    {
        name: 'John K.',
        profileImage: '../assets/profile-images/3.png',
        description: 'Sales Manager - France',
        trend: 'up',
        completedTasks: 5,
        totalTasks: 6,
        revenue: 3000,
    },
]

export const chartData = {
    labels: [
        '',
        'Dec',
        '',
        'Jan',
        '',
        'Feb',
        '',
        'Mar',
        '',
        'Apr',
        '',
        'May',
        '',
        'Jun',
        '',
    ],
    datasets: [
        {
            label: 'Users gained',

            data: [25, 25, 45, 16, 32, 20, 25, 15, 52, 18, 24, 20, 28, 21, 51],
            borderColor: '#4A4DE6',
            tension: 0.5,
            borderWidth: 2,
        },
        {
            label: 'Users gained',
            data: [14, 24, 22, 30, 18, 10, 30, 22, 26, 16, 35, 27, 41, 50, 25],
            borderColor: '#F0D961',
            tension: 0.5,
            borderWidth: 2,
        },
    ],
}
