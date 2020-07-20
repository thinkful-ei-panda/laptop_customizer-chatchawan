import React from 'react';
import featuresStore from './featuresStore';
import Selections from './Selections';
import slugify from 'slugify';


function Features(props) {
  return Object.keys(featuresStore).map((feature, idx) => {
      
    const featureHash = feature + '-' + idx;
    const selections = featuresStore[feature].map(item => {

      const itemHash = slugify(JSON.stringify(item));
      return <Selections feature={feature} format={props.format} itemHash={itemHash} key={itemHash} option={item} selected={props.selected} updateFeature={props.updateFeature}/>  

    })

    return (

      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {selections}
      </fieldset>

    );

  });

};


export default Features;