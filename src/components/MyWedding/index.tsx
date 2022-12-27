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
import { getDatabase, ref, child, get } from "firebase/database";
import {collection, getDocs} from 'firebase/firestore';
import {database} from "../../db/firebase";

const MyWedding:React.FC = () => {
    const [showImage, setShowImage] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const userCollection = collection(database, "users");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollection);
            data.docs.map((doc) => console.log(doc.data()))
        }

        getUsers();
    }, [])
    return(
        <Container>
            <ShowImage currentImage={currentImage} show={showImage} handleShow={setShowImage} handleCurrent={setCurrentImage}/>
            <Heading/>
            <ListComponents/>
            <ListImages handleShowImage={setShowImage} handleCurrentImage={setCurrentImage}/>
            <AddressWrapper>
                <RelatedContentMap data={mockContentMap.fields.data}/>
            </AddressWrapper>
            <RegisterForm/>
        </Container>
    )
}

export default MyWedding;