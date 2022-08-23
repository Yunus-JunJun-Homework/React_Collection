import React from "react";

class CollectionComponent extends React.Component {

  renderData() {
    const {data} = this.props;

   return data.map((item) =>{ // data.map((item, index) => {return <React.Fragment key ={index}></React.Fragment>}
     return (
       <React.Fragment key={item.id}> 
         <dt>{item.dt}</dt>
         <dd>{item.dd}</dd>
       </React.Fragment>
     )
   })
}
  
  render() {
    return (
      <dl style={{maxWidth:'1200px', margin: '0 auto'}}>
        {this.renderData()}
      </dl>
    )
  }
}


CollectionComponent.defaultProps = {
  data: 'Something is wrong',
}

export default CollectionComponent;