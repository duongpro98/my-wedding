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
                    src="https://images.unsplash.com/photo-1670766167104-f8c0d4561708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
                    src="https://images.unsplash.com/photo-1670766167104-f8c0d4561708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
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