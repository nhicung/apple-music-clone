import React from "react";
import ReactLoading from 'react-loading';
import { Container } from "@mui/material";

const Loader = () => {
    return (
        <Container alignItems="center" sx={{width: 'fit-content'}}>
            <ReactLoading type={'spin'} color={'#00000'}/>
        </Container>
    );
};

export default Loader;
