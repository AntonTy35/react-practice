import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import PropTypes from 'prop-types';

const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ stats, title = 'Main Statistics' }) => {
  return (
    <>
      <StatisticTitle>{title}</StatisticTitle>

      <StatisticsList>
        {stats.map(({ id, title, total }, index) => {
          return (
            <StatisticItem
              key={id}
              title={title}
              total={total}
              icon={icons[index]}
            />
          );
        })}
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  title: PropTypes.string,
};
