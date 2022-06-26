import PropTypes from "prop-types";
import { StatisticsSection,StatisticsTitle,StatisticsList,StatisticsItem,Label,Percentage } from 'components/Statistics/Statistics.styled';
var randomColor = require('randomcolor');

 const Statistics =({ title, stats })=> {
    return (
        
            <StatisticsSection>
                {title && <StatisticsTitle>{title}</StatisticsTitle>}

                <StatisticsList>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatisticsItem
                            key={id}
                            style={{ backgroundColor: randomColor() }}>
                            <Label>{label}</Label>
                            <Percentage>{percentage}%</Percentage>
                        </StatisticsItem>
                    );
                })}
                </StatisticsList>
            </StatisticsSection>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),),
}

export default Statistics;