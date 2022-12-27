import React, {useEffect, useState} from "react";
import {
    BigHeader,
    ContainerHeader,
    CountdownWrapper,
    Header,
    Notice,
    Timer,
    TimerNumber,
    TimerText
} from "../StyledMyWedding";
import SvgHeart from "../../../utils/icons/Heart";

const Heading: React.FC = () => {
    const countDownDate = new Date("February 11, 2023 11:00:00").getTime();
    const [day, setDay] = useState<number>();
    const [hour, setHour] = useState<number>();
    const [minute, setMinute] = useState<number>();
    const [second, setSecond] = useState<number>();
    useEffect(() => {
        const x = setInterval(function() {

            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setDay(days);
            setHour(hours);
            setMinute(minutes);
            setSecond(seconds);

            if (distance < 0) {
                clearInterval(x);
            }
        }, 1000);
        return () => {
            clearInterval(x);
        }
    }, [])
    return(
        <ContainerHeader>
            <BigHeader>SAVE THE DATE</BigHeader>
            <Header>Xuân Dương <SvgHeart/> Gia Hân</Header>
            <Notice>11 February 2023</Notice>
            <CountdownWrapper>
                <Timer>
                    <TimerNumber>{day}</TimerNumber>
                    <TimerText>Days</TimerText>
                </Timer>
                <Timer>
                    <TimerNumber>{hour}</TimerNumber>
                    <TimerText>Hours</TimerText>
                </Timer>
                <Timer>
                    <TimerNumber>{minute}</TimerNumber>
                    <TimerText>Minutes</TimerText>
                </Timer>
                <Timer>
                    <TimerNumber>{second}</TimerNumber>
                    <TimerText>Seconds</TimerText>
                </Timer>
            </CountdownWrapper>
        </ContainerHeader>
    )
}

export default Heading;