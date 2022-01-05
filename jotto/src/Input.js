import PropTypes from 'prop-types';
import React from "react";
import {useSelector} from "react-redux";

export default function Input({secretWord}){
    const [currentGuess, setCurrentGuess] = React.useState("");
    const success = useSelector(state => state.success.success);
    if(success) {
        return <div data-test="input-component"/>
    } else {
        return <div data-test="input-component">
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="enter guess"
                    value={currentGuess}
                    onChange={(e) => setCurrentGuess(e.target.value)}
                />
                <button data-test="submit-button"
                        className="btn btn-primary mb-2"
                        onClick={(e)=>{
                            e.preventDefault();
                            setCurrentGuess("");
                        }}
                >Submit</button>
            </form>
        </div>
    }
}

Input.protoTypes = {
    secretWord: PropTypes.string.isRequired,
};