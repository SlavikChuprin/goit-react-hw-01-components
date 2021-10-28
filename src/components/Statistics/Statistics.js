import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({
title,
stats,
} ) => {
    if(title){
  return (
    <section className={s.statistics}>  
  <h2 className={s.title}>{title}</h2>
     
  <ul className={s.statList}>
      {stats.map ( stat => {
          return (<li className={s.item} key={stat.id} style = {{backgroundColor: `#${Math.random().toString(16).substr(2,6)}` }}>
      <span className={s.label}>{stat.label}</span>
      <span className={s.percentage}>{stat.percentage}</span>
    </li>)   
      })}
  </ul>
</section>
  )}
  else {
      return ( <section className={s.statistics}>  
    <ul className={s.statList}>
      {stats.map ( stat => {
          return (<li className={s.item} key={stat.id} style = {{backgroundColor: `#${Math.random().toString(16).substr(2,6)}` }}>
      <span className={s.label}>{stat.label}</span>
      <span className={s.percentage}>{stat.percentage}</span>
    </li>)   
      })}
  </ul>
</section>)
  }
};

Statistics.propTypes = {
title:PropTypes.string,
stats:PropTypes.array.isRequired,
};

export default Statistics;