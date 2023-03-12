import { ICardsDummyData, ICountryDummyData, IIconList } from './interface'

export const bl = 'bl'
export const trendIconPath = {
    up: '../assets/trend-icon/up.png',
    down: '../assets/trend-icon/down.png',
}
export const cardsDummyData: ICardsDummyData[] = [
    {
        name: 'Suraj Maharana',
        profileImage: '../assets/profile-images/my.png',
        description: 'Developer - India',
        trend: 'up',
        completedTasks: 3,
        totalTasks: 6,
        revenue: 5430,
    },
    {
        name: 'Jane Issac',
        profileImage: '../assets/profile-images/1.png',
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

export const countriesDummyData: ICountryDummyData[] = [
    {
        countryName: 'Belgium',
        flagSource: '../assets/flags/belgium.png',
        count: '7.5K',
    },
    {
        countryName: 'France',
        flagSource: '../assets/flags/france.png',
        count: '5.3K',
    },
    {
        countryName: 'USA',
        flagSource: '../assets/flags/usa.png',
        count: '4.9K',
    },
    {
        countryName: 'Germany',
        flagSource: '../assets/flags/germany.png',
        count: '4.8K',
    },
]

export const dummyCategory = [
    { text: 'Not Specified', color: '#919294' },
    { text: 'Male', color: '#CACCF7' },
    { text: 'Female', color: '#828AED' },
    { text: 'Other', color: '#4A4DE6' },
]

export const primaryDashBoardList: IIconList[] = [
    {
        iconUrl: '../assets/menu-icons/dashBoard.png',
        text: 'DashBoard',
        active: true,
    },
    {
        iconUrl: '../assets/menu-icons/overview.png',
        text: 'Overview',
    },
    {
        iconUrl: '../assets/menu-icons/Chat.png',
        text: 'Chat',
        notificationCount: 5,
    },
    {
        iconUrl: '../assets/menu-icons/3 User.png',
        text: 'Team',
    },
]

export const secondaryDashBoardList: IIconList[] = [
    {
        iconUrl: '../assets/menu-icons/Document.png',
        text: 'Tasks',
    },
    {
        iconUrl: '../assets/menu-icons/Danger.png',
        text: 'Reports',
    },
    {
        iconUrl: '../assets/menu-icons/Setting.png',
        text: 'Setting',
    },
]
