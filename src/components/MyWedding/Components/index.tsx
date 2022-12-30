import React, {useEffect, useState} from "react";
import {Components, Birthday, Component, Content, HeartWrapper, IconGroup, ImageAvatar, Name} from "../StyledMyWedding";
import Facebook from "../../../utils/icons/Facebook";
import Instagram from "../../../utils/icons/Instagram";
import Heart from "../../../utils/icons/Heart";

const ListComponents:React.FC = () => {
    const [height, setHeight] = useState(350);

    let resizeWindow = () => {
        const width = document!.getElementById("imagecolumn")!.getBoundingClientRect().width;
        setHeight(width);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    return (
        <Components>
            <Component height={height}>
                <ImageAvatar
                    id="imagecolumn"
                    src="https://drive.google.com/uc?export=view&id=1SmgCAycoUJ2Xg4zOU9EA8oDFS0LYpuCJ"
                />
                <Content>
                    <Name>Đỗ Xuân Dương</Name>
                    <Birthday>11/08/1998</Birthday>
                    <IconGroup>
                        <Facebook/>
                        <Instagram/>
                    </IconGroup>
                </Content>
            </Component>
            <HeartWrapper>
                <Heart/>
            </HeartWrapper>
            <Component height={height}>
                <ImageAvatar
                    id="imagecolumn"
                    src="https://drive.google.com/uc?export=view&id=1JNu0Qsuehh8nFgR_uQbEs9Nm5AQ49nXU"/>
                <Content>
                    <Name>Nguyễn Gia Hân</Name>
                    <Birthday>19/05/1998</Birthday>
                    <IconGroup>
                        <Facebook/>
                        <Instagram/>
                    </IconGroup>
                </Content>
            </Component>
        </Components>
    )
}

export default ListComponents;