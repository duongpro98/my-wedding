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
                <Image src={"/my-wedding/family.png"}/>
                <ImageAvatar
                    id={"imagecolumn"}
                    src={"/my-wedding/imgs/avatar_chin_cha.jpg"}
                />
            </Header>
            <ImageTest
                src={"/my-wedding/imgs/chin_cha.jpg"}
            />
        </Container>
    )
}

export default Family;