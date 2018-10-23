import React from 'react'
import { connect } from 'react-redux'
import WeeklyDayHeader from '../components/WeekDayHeader'
import PageHeader from '../components/PageHeader'
import Calender from '../components/Calender'
class Home extends React.Component {

    render() {
        this.checkLocalStorage()
        return (
            <React.Fragment>
                <PageHeader />
                <WeeklyDayHeader />
                <Calender />
            </React.Fragment>
        )
    }
    checkLocalStorage = () => {
        const { colors, calenderBackgroundColor, dates } = this.props
        if (!localStorage.getItem('colors')) {
            localStorage.setItem('colors', JSON.stringify(colors))
        }
        if (!localStorage.getItem('calenderBackgroundColor')) {
            localStorage.setItem('calenderBackgroundColor', calenderBackgroundColor)
        }
        if (!localStorage.getItem('dates')) {
            localStorage.setItem('dates', JSON.stringify(dates))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const { dates, colors, calenderBackgroundColor } = state
    return {
        dates: dates,
        colors: colors,
        calenderBackgroundColor: calenderBackgroundColor
    }
}

export default connect(mapStateToProps, null)(Home);