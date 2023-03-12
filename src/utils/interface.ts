export interface ICardsDummyData {
    name: string
    profileImage: string
    description: string
    trend: 'up' | 'down'
    completedTasks: number
    totalTasks: number
    revenue: number
}
export interface ICountryDummyData {
    countryName: string
    flagSource: string
    count: string
}

export interface IIconList {
    active?: boolean
    iconUrl: string
    text: string
    notificationCount?: number
}
