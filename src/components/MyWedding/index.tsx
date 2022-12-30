import React, {useEffect, useRef, useState} from "react";
import {
    Container,
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
import Snowfall from "react-snowfall";

const MyWedding:React.FC = () => {
    const [showImage, setShowImage] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [loadSnowfall, setLoadSnowfall] = useState(false);
    const heart = document.createElement('img');
    heart.src = 'https://drive.google.com/uc?export=view&id=14jwfa3EQyAf83ithDuDEUA5LYMzcc9PB';
    const images = [heart];

    useEffect(() => {
        setTimeout(() => {
            setLoadSnowfall(true);
        }, 500);
    }, [])

    return(
        <Container id={"container"}>
            {
                loadSnowfall && (
                    <Snowfall
                        style={{ zIndex: 3 }}
                        snowflakeCount={16}
                        images={images}
                        radius={[20, 30]}
                        speed={[5, 5]}
                        rotationSpeed={[1, 3]}
                        changeFrequency={100}
                    />
                )
            }
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