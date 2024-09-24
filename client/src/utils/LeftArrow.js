import React from 'react';

const LeftArrow = () => {
  const arrowStyle = {
    width: '24px',
    height: '24px',
    position: 'relative',
  };

  const lineStyle = {
    position: 'absolute',
    width: '12px',
    height: '2px',
    backgroundColor: 'white',
    left: '0',
  };

  const topLineStyle = {
    ...lineStyle,
    top: '6px',
    transform: 'rotate(-45deg)',
  };

  const middleLineStyle = {
    ...lineStyle,
    top: '11px',
    width: '18px',
  };

  const bottomLineStyle = {
    ...lineStyle,
    bottom: '6px',
    transform: 'rotate(45deg)',
  };

  return (
    <div style={arrowStyle}>
      <div style={topLineStyle}></div>
      <div style={middleLineStyle}></div>
      <div style={bottomLineStyle}></div>
    </div>
  );
};

export default LeftArrow;