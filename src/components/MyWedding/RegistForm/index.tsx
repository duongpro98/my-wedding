import React, {useLayoutEffect, useState} from "react";
import {FormContainer, Title, Description, FieldWrapper, TextArea, TextContainer, Text, SubmitButton, Footer} from "./StyledRegisterForm";
import InputText from "../../../utils/InputText";
import {Grid} from "@mui/material";
import {listImages} from "../dictionary";
import {ImageAlbum} from "../StyledMyWedding";

const RegisterForm:React.FC = () => {
    const [value1, setValue1] = useState("");
    const [err, setErr] = useState("");

    const handleViewPort = () => {
        if(window.innerWidth <= 599){
            return true;
        }
        return false;
    }

    const [isExtraSmall, setIsExtraSmall] = useState(handleViewPort());
    const handleChange = (value: string) => {
        setValue1(value)
    }

    useLayoutEffect(() => {
        window.addEventListener("resize", () => {
            setIsExtraSmall(handleViewPort());
        });
    })

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
                                    value={value1}
                                    onChange={(e) => handleChange(e.target?.value)}
                                    errorMsg={err}
                                    placeHolder={"Email"}
                                />
                            </TextContainer>
                            <TextContainer>
                                <Text>Họ và tên</Text>
                                <InputText
                                    id={"id"}
                                    value={value1}
                                    onChange={(e) => handleChange(e.target?.value)}
                                    errorMsg={err}
                                    placeHolder={"Họ và tên"}
                                />
                            </TextContainer>
                            {!isExtraSmall && (<SubmitButton>Gửi lời chúc</SubmitButton>)}
                        </div>
                        {/*</TextContainer>*/}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        {/*<TextArea>*/}
                        <TextArea placeholder={"Hello"}/>
                        {isExtraSmall && (<SubmitButton>Gửi lời chúc</SubmitButton>)}
                    </Grid>
                </Grid>
            </FieldWrapper>
            <Footer>Thank you !</Footer>
        </FormContainer>
    )
}

export default RegisterForm;