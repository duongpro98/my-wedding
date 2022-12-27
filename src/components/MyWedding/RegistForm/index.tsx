import React, {useLayoutEffect, useState} from "react";
import {FormContainer, Title, Description, FieldWrapper, TextArea, TextContainer, Text, SubmitButton, Footer} from "./StyledRegisterForm";
import InputText from "../../../utils/InputText";
import {Grid} from "@mui/material";
import {database} from "../../../db/firebase";
import {addDoc, collection} from "firebase/firestore";

const RegisterForm:React.FC = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [note, setNote] = useState("");
    const [err, setErr] = useState("");
    const userCollection = collection(database, "users");

    const handleViewPort = () => {
        if(window.innerWidth <= 599){
            return true;
        }
        return false;
    }

    const [isExtraSmall, setIsExtraSmall] = useState(handleViewPort());
    const handleChange = (value: string, type: string) => {
        if(type === "email"){
            setEmail(value)
        }else if(type === "name"){
            setName(value)
        }else {
            setNote(value)
        }
    }

    useLayoutEffect(() => {
        window.addEventListener("resize", () => {
            setIsExtraSmall(handleViewPort());
        });
    })

    const handleSubmit = async () => {
        try{
            await addDoc(userCollection, {
                email: email,
                name: name,
                note: note
            });
            console.log("Submit successfully");
        }
        catch (err){
            console.log(err);
        }
    }

    return (
        <FormContainer>
            <Title>Lời chúc</Title>
            <Description>Mọi người yêu mến thì nhắn lời chúc vào đây nha</Description>
            <FieldWrapper>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={6}>
                        {/*<TextContainer>*/}
                        <div style={{marginTop: 0}}>
                            <TextContainer>
                                <Text>Email</Text>
                                <InputText
                                    id={"id"}
                                    value={email}
                                    onChange={(e) => handleChange(e.target?.value, "email")}
                                    errorMsg={err}
                                    placeHolder={"Email"}
                                />
                            </TextContainer>
                            <TextContainer>
                                <Text>Họ và tên</Text>
                                <InputText
                                    id={"id"}
                                    value={name}
                                    onChange={(e) => handleChange(e.target?.value, "name")}
                                    errorMsg={err}
                                    placeHolder={"Họ và tên"}
                                />
                            </TextContainer>
                            {!isExtraSmall && (<SubmitButton onClick={() => handleSubmit()}>Gửi lời chúc</SubmitButton>)}
                        </div>
                        {/*</TextContainer>*/}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        {/*<TextArea>*/}
                        <TextArea
                            id={"area"}
                            value={note}
                            onChange={(e) => handleChange(e.target?.value, "note")}
                            placeholder={"Hello"}
                        />
                        {isExtraSmall && (<SubmitButton onClick={() => handleSubmit()}>Gửi lời chúc</SubmitButton>)}
                    </Grid>
                </Grid>
            </FieldWrapper>
            <Footer>Thank you !</Footer>
        </FormContainer>
    )
}

export default RegisterForm;