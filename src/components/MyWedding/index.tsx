import React, {useEffect, useLayoutEffect, useState} from "react";
import {
    Container,
    FormContainer,
    AddressWrapper,
} from "./StyledMyWedding";
import RelatedContentMap from "../RelatedContentMap";
import mockContentMap from "./mockContentMap";
import Heading from "./Heading";
import ShowImage from "./ShowImage";
import ListComponents from "./Components";
import ListImages from "./ListImages";
import RegisterForm from "./RegistForm";
import Family from "./Family";

const MyWedding:React.FC = () => {
    const [showImage, setShowImage] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    return(
        <Container>
            <ShowImage currentImage={currentImage} show={showImage} handleShow={setShowImage} handleCurrent={setCurrentImage}/>
            <Heading/>
            <ListComponents/>
            <Family/>
            <ListImages handleShowImage={setShowImage} handleCurrentImage={setCurrentImage}/>
            <AddressWrapper>
                <RelatedContentMap data={mockContentMap.fields.data}/>
            </AddressWrapper>
            <RegisterForm/>
        </Container>
    )
}

export default MyWedding;