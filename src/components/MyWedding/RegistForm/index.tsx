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
    TextAreaContainer,
    ImageQR,
    QRContainer,
    QRComponent,
    QRText
} from "./StyledRegisterForm";
import InputText from "../../../utils/InputText";
import {Grid} from "@mui/material";
import {database} from "../../../db/firebase";
import {addDoc, collection} from "firebase/firestore";
import {checkProperties, handleCheckInput} from "../../../utils/helpers/validation/validateInput";
import SvgWarning from "../../../utils/icons/Warning";
import {LoadingButton} from "@mui/lab";
import "./styles.css";

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
    const [showQR, setShowQR] = useState(false);
    const [loader, setLoader] = useState("loaded");
    const userCollection = collection(database, "best-wishes");

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
            setDisabled(true);
            try{
                await addDoc(userCollection, {
                    email: email,
                    name: name,
                    note: note
                });
                setEmail("");
                setName("");
                setNote("");
                setLoader("success");
                // setThanks("Gửi thành công rùi");
            }
            catch (err){
                // setThanks("Có lỗi xảy ra, vui lòng thử lại sau")
                setLoader("error");
                console.log(err);
            }
        }
    }

    useEffect(() => {
        if(loader !== "loaded"){
            if(loader === "success"){
                setTimeout(() => {
                    setThanks("Gửi thành công rùi");
                    // setDisabled(false);
                    setLoader("loaded");
                }, 2000)
            }
            else {
                setTimeout(() => {
                    setThanks("Có lỗi xảy ra, vui lòng thử lại sau");
                    // setDisabled(false);
                    setLoader("loaded");
                }, 2000)
            }
        }
    }, [loader])

    useEffect(() => {
        if(thanks !== ""){
            setTimeout(() => {
                setThanks("");
                setDisabled(false);
                // setLoader(false);
            }, 2000)
        }
    }, [thanks])

    return (
        <FormContainer>
            <Title>Lời chúc</Title>
            <Description>Mọi người yêu mến thì nhắn lời chúc vào đây nha</Description>
            <FieldWrapper>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={6} md={6}>
                        {/*<TextContainer>*/}
                        <div style={{marginTop: 0}} className={"button"}>
                            <TextContainer>
                                <Text>
                                    Email
                                </Text>
                                <InputText
                                    id={"id"}
                                    value={email}
                                    onChange={(e) => handleChange(e.target?.value, "email")}
                                    errorMsg={err.email}
                                    placeHolder={"Email"}
                                />
                            </TextContainer>
                            <TextContainer>
                                <Text>Họ và tên*</Text>
                                <InputText
                                    id={"id"}
                                    value={name}
                                    onChange={(e) => handleChange(e.target?.value, "name")}
                                    errorMsg={err.name}
                                    placeHolder={"Họ và tên"}
                                />
                            </TextContainer>
                            {!isExtraSmall && (
                                <LoadingButton
                                    loading={loader !== "loaded"}
                                    className={"loading-button"}
                                    disabled={disabled}
                                    style={{
                                        color: loader !== "loaded" ? 'transparent': '',
                                        background: loader !== "loaded" ? '#ffafbd': ''
                                    }}
                                    onClick={() => handleSubmit()}
                                >
                                    Gửi lời chúc
                                </LoadingButton>
                            )}
                        </div>
                        {/*</TextContainer>*/}
                    </Grid>
                    {!isMedium && (<Grid item xs={12} sm={1} md={1}></Grid>)}
                    <Grid item xs={12} sm={5} md={5}>
                        {/*<TextArea>*/}
                        <TextAreaContainer className={"button"}>
                            <TextArea
                                id={"area"}
                                value={note}
                                onChange={(e) => handleChange(e.target?.value, "note")}
                                placeholder={"Lời chúc*"}
                            />
                            {err.note && <p className="error-note"><SvgWarning/>{err.note}</p>}
                            {isExtraSmall && (
                                <LoadingButton
                                    loading={loader !== "loaded"}
                                    className={"loading-button"}
                                    disabled={disabled}
                                    onClick={() => handleSubmit()}
                                >
                                    Gửi lời chúc
                                </LoadingButton>
                            )}
                        </TextAreaContainer>
                    </Grid>
                </Grid>
            </FieldWrapper>
            {thanks && (
                <Notice isSuccess={thanks === "Gửi thành công rùi"}>{thanks}</Notice>
            )}
            <SubmitButton onClick={() => setShowQR(!showQR)}>
                Mừng cưới
            </SubmitButton>
            <QRContainer className={!showQR? 'not-show-up': ''}>
                <QRComponent>
                    <ImageQR src={"https://my-chin-cha-wedding.s3.ap-southeast-1.amazonaws.com/qr_code.jpg"}/>
                    <QRText>Nhà trai</QRText>
                </QRComponent>
                <QRComponent>
                    <ImageQR src={"https://my-chin-cha-wedding.s3.ap-southeast-1.amazonaws.com/qr_code_wife.jpg"}/>
                    <QRText>Nhà gái</QRText>
                </QRComponent>
            </QRContainer>
            <Footer>Thank you !</Footer>
        </FormContainer>
    )
}

export default RegisterForm;