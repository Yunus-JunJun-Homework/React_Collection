import React from 'react';

const CollectionFunc = ({data}) => {
  const renderCollection = data.map((item)=> {
    return(
      <React.Fragment key={item.id}>
        <dt>{item.dt}</dt>
        <dd>{item.dd}</dd>
      </React.Fragment>
    )
  })
  return (
    <dl style={{maxWidth:'1200px', margin: '0 auto'}}>
      {renderCollection}
    </dl>
  );
};

export default CollectionFunc;