import React from "react";
import {
    Container,
    Header,
    ImageAvatar,
    Image,
    ImageTest,
    HeaderText
} from "./StyledFamily";
import {Skeleton} from "@mui/material";

interface FamilyComponentsProps{
    listLoaded: any,
    handleLoad: any
}

const Family: React.FC<FamilyComponentsProps> = ({ listLoaded, handleLoad }) => {
    return(
        <Container>
            <Header>
                <HeaderText>Thành viên thứ ba của gia đình</HeaderText>
                <Image src={"/my-wedding/images/family.jpg"}/>
                <Skeleton
                    id="imagecolumn"
                    variant="circular"
                    sx={{
                        width: 88,
                        height: 88,
                        display: listLoaded.includes("ava_chin_cha")? "none": ""
                }}
                />
                <ImageAvatar
                    id={"imagecolumn"}
                    src={"/my-wedding/images/avatar_chin_cha.jpg"}
                    onLoad={() => handleLoad("ava_chin_cha")}
                    style={{
                        display: !listLoaded.includes("ava_chin_cha")? "none": ""
                    }}
                />
            </Header>
            <Skeleton variant="rectangular" width={675} height={900} style={{
                minWidth: 'auto',
                maxHeight: 900,
                borderRadius: 10,
                display: listLoaded.includes("anh_chin_cha")? "none": ""
            }}/>
            <ImageTest
                src={"/my-wedding/images/chin_cha_yeu.jpg"}
                onLoad={() => handleLoad("anh_chin_cha")}
                style={{
                    display: !listLoaded.includes("anh_chin_cha")? "none": ""
                }}
            />
        </Container>
    )
}

export default Family;