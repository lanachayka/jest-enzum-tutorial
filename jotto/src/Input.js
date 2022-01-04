import PropTypes from 'prop-types';

export default function Input({secretWord}){
    return (<div data-test="input-component">

    </div>);
}

Input.protoTypes = {
    secretWord: PropTypes.string.isRequired,
};