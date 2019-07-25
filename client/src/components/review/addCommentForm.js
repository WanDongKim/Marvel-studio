import React from 'react';

const rating = [0,1,2,3,4,5,6,7,8,9,10]

const AddCommentForm = ({onSubmit, onChange}) => {
    return (
    <form className="AddCommentForm" onSubmit={onSubmit}>
        <input className="Form__Title" name="title" type="text" placeholder="Title" required={true} onChange={onChange} />
        <select className="Form__Rating" name="rating"  onChange={onChange}>
        {
            rating.map((number) => {
                return <option key={number} value ={number}>{number}</option>
            })
        }
        </select>
        <textarea className="commentFormTextArea" name="commentText" type="text" placeholder="Enter your review" required={true} onChange={onChange} cols="30" rows="15"/>
        <div className="Form__Buttons">
            <button type="submit" className="btnAdd" name="btnAdd">Add Review</button>
            <button type="clear" className="btnClear" name="btnClear">Clear</button>
        </div>
    </form>
    )};


export default AddCommentForm;