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
                <HeaderText>Thành viên thứ ba của gia đình</HeaderText>
                <Image src={"/my-wedding/images/family.jpg"}/>
                <ImageAvatar
                    id={"imagecolumn"}
                    src={"/my-wedding/images/avatar_chin_cha.jpg"}
                />
            </Header>
            <ImageTest
                src={"/my-wedding/images/chin_cha_yeu.jpg"}
            />
        </Container>
    )
}

export default Family;