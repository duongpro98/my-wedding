import React, {useState} from "react";
import {CloseButton, ImageDefault, ImageShowUp, SlideButtonWrapper} from "../StyledMyWedding";
import Close from "../../../utils/icons/Close";
import ArrowLeft from "../../../utils/icons/ArrowLeft";
import ArrowRight from "../../../utils/icons/ArrowRight";
import {listImages} from "../dictionary";

interface showImageProps{
    show: boolean,
    currentImage: any,
    handleShow: any,
    handleCurrent: any
}
const ShowImage:React.FC<showImageProps> = ({show, currentImage, handleShow, handleCurrent}) => {
    const [click, setClick] = useState<number[]>([]);
    const [sideFade, setSideFade] = useState("left");

    const handleClickNext = () => {
        if(currentImage <= listImages.length - 1){
            handleRemoveNext(currentImage + 1);
            handleCurrent(currentImage => currentImage + 1);
            setSideFade("left");
        }
    }

    const handleClickBack = () => {
        if(currentImage > 1){
            handleRemoveBack(currentImage - 1)
            handleCurrent(currentImage => currentImage - 1);
            setSideFade("right");
        }
    }

    const handleRemoveBack = (id: number) => {
        let newClick = click;
        newClick = newClick.filter(item => item !== id);
        newClick.push(id + 1);
        setClick([...newClick]);
    }

    const handleRemoveNext = (id: number) => {
        let newClick = click;
        newClick = newClick.filter(item => item !== id);
        newClick.push(id - 1);
        setClick([...newClick]);
    }

    const animation = (side: string) => {
        if(side === "left"){
            return "image-slide-left"
        }else {
            return "image-slide-right"
        }
    }

    const handleClose = () => {
        handleCurrent(0);
        handleShow(false);
        setClick([]);
    }

    return (
        show && (
            <ImageShowUp>
                <CloseButton onClick={() => handleClose()}>
                    <Close/>
                </CloseButton>
                <SlideButtonWrapper position={"left"} onClick={() => handleClickBack()}>
                    <ArrowLeft></ArrowLeft>
                </SlideButtonWrapper>
                {
                    listImages.map((image) => (
                        <ImageDefault
                            className={click.includes(image.id) ? animation(sideFade): ''}
                            src={image.src}
                        />
                    ))
                }
                <ImageDefault
                    // onClick={() => handleClick(image.id)}
                    className={click.includes(currentImage) ? 'image-slide-left': ''}
                    src={listImages[currentImage - 1].src}
                />
                <SlideButtonWrapper position={"right"} onClick={() => handleClickNext()}>
                    <ArrowRight></ArrowRight>
                </SlideButtonWrapper>
            </ImageShowUp>
        )
    )
}

export default ShowImage;