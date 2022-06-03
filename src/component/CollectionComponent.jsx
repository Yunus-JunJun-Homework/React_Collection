import React from "react";

class CollectionComponent extends React.Component {

  renderData() {
    const {data} = this.props;

   return data.map((item) =>{
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
      <dl>
        {this.renderData()}
      </dl>
    )
  }
}




export default CollectionComponent;