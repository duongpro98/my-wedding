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
                <Image src={"https://drive.google.com/uc?export=view&id=1YhgMd_xoDVlqE_ItsgRuuQNvSftxM_xu"}/>
                <ImageAvatar
                    id={"imagecolumn"}
                    src={"https://drive.google.com/uc?export=view&id=1KEVNOdGZUYcDA-skgioMH5oQXUnEV5rP"}
                />
            </Header>
            <ImageTest
                src={"https://drive.google.com/uc?export=view&id=14i9qWYDZTABSoWb_qwe8FgPgZ16wFLQh"}
            />
        </Container>
    )
}

export default Family;