import React, {useLayoutEffect, useState} from "react";
import {
    AlbumDescription,
    AlbumHeader,
    ImageAlbum,
    ImageAlbumWrapper,
    ImageFlower,
    ListImageContainer
} from "../StyledMyWedding";
import {Grid} from "@mui/material";
import {listImages} from "../dictionary";
import {Skeleton} from "@mui/material";

interface listImageProps{
    listLoaded: any,
    handleShowImage: any,
    handleLoad: any,
    handleCurrentImage: any
}
const ListImages:React.FC<listImageProps> = ({ listLoaded, handleShowImage, handleCurrentImage, handleLoad }) => {
    const handleViewPort = () => {
        let sizeNumber;
        if(window.innerWidth < 900 && window.innerWidth >= 575){
            sizeNumber = 6;
        }else {
            sizeNumber = 4;
        }
        return sizeNumber;
    }
    const [size, setSize] = useState(handleViewPort());

    const handleClickShowUp = (id: number) => {
        handleShowImage(true);
        handleCurrentImage(id);
    }

    const handleComplexImage = (item: any, size: number) => {
        if(item.length > 0){
            let transform = [];
            for (let i = 0; i < item.length; i += size) {
                const chunk = item.slice(i, i + size);
                transform.push(chunk)
            }
            return transform;
        }
        return []
    }

    useLayoutEffect(() => {
        window.addEventListener("resize", () => {
            setSize(handleViewPort());
        });
    })

    return (
        <ListImageContainer>
            <ImageAlbumWrapper>
                {/*<Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyf_XfTY1LBdQDsylxjXkwOm8U8_cKho6QSw&usqp=CAU"}></Image>*/}
                <ImageFlower src={"https://manhchau.iwedding.info/templates/template15/images/sec-title-flower.png"}></ImageFlower>
            </ImageAlbumWrapper>
            <AlbumHeader>Ảnh cưới</AlbumHeader>
            <AlbumDescription>Mọi người cùng xem ảnh của hai chúng mình nhé</AlbumDescription>
            <Grid container spacing={2}>
                {
                    handleComplexImage(listImages, size).map((images, idx) => (
                        <Grid item xs={12} sm={6} md={4} key={idx}>
                            <Grid container spacing={2}>
                                {
                                    images.map((img: any) => (
                                        <Grid item xs={12} sm={12} md={12} key={img.id}>
                                            <ImageAlbum
                                                onClick={() => handleClickShowUp(img.id)}
                                                onLoad={(e) => handleLoad(img.id)}
                                                style={{
                                                    display: !listLoaded.includes(img.id)? "none": ""
                                                }}
                                                src={img.src}
                                            />
                                            {
                                                !listLoaded.includes(img.id) && (
                                                    <Skeleton variant="rectangular" height={397} style={{
                                                        width: '100%',
                                                        cursor: "pointer",
                                                        borderRadius: 6
                                                    }}/>
                                                )
                                            }
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </ListImageContainer>
    )
}

export default ListImages;