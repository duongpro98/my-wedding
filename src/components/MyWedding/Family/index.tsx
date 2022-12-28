import React from "react";
import {
    Container,
    Header,
    ImageAvatar,
    Image,
    ImageTest,
    HeaderText
} from "./StyledFamily";

const Family: React.FC = () => {
    return(
        <Container>
            <Header>
                <HeaderText>Nhà mình có thành viên mới</HeaderText>
                <Image src={"/my-wedding/family.png"}/>
                <ImageAvatar
                    id={"imagecolumn"}
                    src={"https://images.unsplash.com/photo-1615963244664-5b845b2025ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"}
                />
            </Header>
            <ImageTest
                src={"https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
            />
        </Container>
    )
}

export default Family;