import React from 'react'
import { connect } from 'react-redux'
import WeeklyDaysName from '../components/WeeklyDaysName'
import PageHeader from '../components/PageHeader'
import Calender from '../components/Calender'
class Home extends React.Component {

    render() {
        this.checkLocalStorage()
        return (
            <React.Fragment>
                <PageHeader />
                <WeeklyDaysName />
                <Calender />
            </React.Fragment>
        )
    }
    //check if data is avialable in localstorage or not,
    // if not available then store data
    checkLocalStorage = () => {
        const { colors, calenderBackgroundColor, dates } = this.props
        if (!localStorage.getItem('colors')) {
            localStorage.setItem('colors', JSON.stringify(colors))
            localStorage.setItem('calenderBackgroundColor', calenderBackgroundColor)
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