import React, {useEffect, useLayoutEffect, useState} from "react";
import {
    FormContainer,
    Title,
    Description,
    FieldWrapper,
    TextArea,
    TextContainer,
    Text,
    SubmitButton,
    Footer,
    Notice,
    TextAreaContainer
} from "./StyledRegisterForm";
import InputText from "../../../utils/InputText";
import {Grid} from "@mui/material";
import {database} from "../../../db/firebase";
import {addDoc, collection} from "firebase/firestore";
import {checkProperties, handleCheckInput} from "../../../utils/helpers/validation/validateInput";
import SvgWarning from "../../../utils/icons/Warning";

const listErrors = {
    email: "Email chưa chính xác",
    name: "Vui lòng nhập lại",
    note: "Vui lòng nhập lại"
}

const RegisterForm:React.FC = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [note, setNote] = useState("");
    const [thanks, setThanks] = useState("");
    const [err, setErr] = useState({
        email: "",
        name: "",
        note: ""
    });
    const [disabled, setDisabled] = useState(false);
    const userCollection = collection(database, "wishes");

    const handleViewPort = () => {
        if(window.innerWidth <= 599){
            return true;
        }
        return false;
    }

    const handleViewPortMedium = () => {
        if(window.innerWidth <= 1440){
            return true;
        }
        return false;
    }

    const [isExtraSmall, setIsExtraSmall] = useState(handleViewPort());
    const [isMedium, setIsMedium] = useState(handleViewPortMedium());
    const handleChange = (value: string, type: string) => {
        let error = err;
        if(type === "email"){
            setEmail(value)
        }else if(type === "name"){
            setName(value)
        }else {
            setNote(value)
        }
        if(!handleCheckInput(value, type)){
            error[type] = listErrors[type];
        }else {
            error[type] = "";
        }
        setErr({...error});
    }

    useLayoutEffect(() => {
        window.addEventListener("resize", () => {
            setIsExtraSmall(handleViewPort());
            setIsMedium(handleViewPortMedium());
        });
    })

    const triggerError = () => {
        let error = {} as any;
        error = {
            email: handleCheckInput(email, "email") ?'': listErrors["email"],
            name: handleCheckInput(name, "name") ?'': listErrors["name"],
            note: handleCheckInput(note, "note") ?'': listErrors["note"],
        }
        setErr({...error});
        return error;
    }

    const handleSubmit = async () => {
        const errors = triggerError();
        if(checkProperties(errors)){
            setDisabled(true)
            try{
                await addDoc(userCollection, {
                    email: email,
                    name: name,
                    note: note
                });
                setEmail("");
                setName("");
                setNote("");
                setThanks("Gửi thành công rùi");
            }
            catch (err){
                setThanks("Có lỗi xảy ra, vui lòng thử lại sau")
                console.log(err);
            }
        }
    }

    useEffect(() => {
        if(thanks !== ""){
            setTimeout(() => {
                setThanks("");
                setDisabled(false);
            }, 2000)
        }
    }, [thanks])

    return (
        <FormContainer>
            <Title>Lời chúc</Title>
            <Description>Mọi người yêu mến thì nhắn lời chúc vào đây nha</Description>
            {thanks && (
                <Notice isSuccess={thanks === "Gửi thành công rùi"}>{thanks}</Notice>
            )}
            <FieldWrapper>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={6} md={6}>
                        {/*<TextContainer>*/}
                        <div style={{marginTop: 0}}>
                            <TextContainer>
                                <Text>Email</Text>
                                <InputText
                                    id={"id"}
                                    value={email}
                                    onChange={(e) => handleChange(e.target?.value, "email")}
                                    errorMsg={err.email}
                                    placeHolder={"Email"}
                                />
                            </TextContainer>
                            <TextContainer>
                                <Text>Họ và tên</Text>
                                <InputText
                                    id={"id"}
                                    value={name}
                                    onChange={(e) => handleChange(e.target?.value, "name")}
                                    errorMsg={err.name}
                                    placeHolder={"Họ và tên"}
                                />
                            </TextContainer>
                            {!isExtraSmall && (<SubmitButton disabled={disabled} onClick={() => handleSubmit()}>Gửi lời chúc</SubmitButton>)}
                        </div>
                        {/*</TextContainer>*/}
                    </Grid>
                    {!isMedium && (<Grid item xs={12} sm={1} md={1}></Grid>)}
                    <Grid item xs={12} sm={5} md={5}>
                        {/*<TextArea>*/}
                        <TextAreaContainer>
                            <TextArea
                                id={"area"}
                                value={note}
                                onChange={(e) => handleChange(e.target?.value, "note")}
                                placeholder={"Hello"}
                            />
                            {err.note && <p className="error-note"><SvgWarning/>{err.note}</p>}
                            {isExtraSmall && (<SubmitButton onClick={() => handleSubmit()} disabled={disabled}>Gửi lời chúc</SubmitButton>)}
                        </TextAreaContainer>
                    </Grid>
                </Grid>
            </FieldWrapper>
            <Footer>Thank you !</Footer>
        </FormContainer>
    )
}

export default RegisterForm;