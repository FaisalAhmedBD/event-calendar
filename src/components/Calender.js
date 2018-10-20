import React from 'react';
import SingleDate from './SingleDate'
import { connect } from 'react-redux';
import '../styles/calender.css'
import { Container, Row, Col } from 'reactstrap';
class Calender extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { dates } = this.props
        return (
            <Container fluid className="calenderContainer" >
                <Row className="dateRow">
                    <div className="allDates">
                        {dates.map((date, index) => {
                            return <div className="date"> <SingleDate dayTitle={date.index} key={index} /></div>
                        })}
                    </div>
                </Row>
            </Container>
        )
    }
}
const mapStateToProps = (store) => {
    const { dates, colors } = store
    return {
        dates
    }
}
export default connect(mapStateToProps, null)(Calender)