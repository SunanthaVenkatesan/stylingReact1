import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid]=useState(true)
 
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    //trim removes the whitespaces and check for the input length
    if(enteredValue.trim().length===0){
      setIsValid(false  )
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid? 'invalid':''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <div className={`form-control ${!isValid? 'invalid':''}`}>
      <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;


/*
Note:
Inline style:
has the highest priority in css and it creates some duplication in some events
 <label style={{color:!isValid?'red':'black'}}>Course Goal</label>

 Dynmaic style using class:
   <div className={`form-control ${!isValid? 'invalid':''}`}>
   this is better as it will not create any dupicates 
 */
