import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Row,
    Col
} from 'reactstrap';
import './style.css';

const items = [
    [{ city: 'Barcelona', caption:'Barcelona ', Url: "https://cronicaglobal.elespanol.com/uploads/s1/71/08/87/5/hoteles-ingresos-barcelona.jpeg" },
    { city: 'New York', caption:'New York ', Url: "https://cdn.getyourguide.com/img/tour_img-1096032-146.jpg" },
    { city: 'Amsterdam', caption:'Amsterdam ', Url: "https://cdn.getyourguide.com/img/tour_img-1686378-146.jpg" },
    { city: 'Paris', caption:'Paris ', Url: "https://cdn.getyourguide.com/img/tour_img-1294407-146.jpg" }],

    [{ city: 'New Yor', caption:'New York ', Url: "https://cdn.getyourguide.com/img/tour_img-1096032-146.jpg" },
    { city: 'Barcelon', caption:'Barcelona ', Url: "https://cronicaglobal.elespanol.com/uploads/s1/71/08/87/5/hoteles-ingresos-barcelona.jpeg" },
    { city: 'Amsterdm', caption:'Amsterdam ', Url: "https://cdn.getyourguide.com/img/tour_img-1686378-146.jpg" },
    { city: 'Pari', caption:'Paris ', Url: "https://cdn.getyourguide.com/img/tour_img-1294407-146.jpg" }],

    [{ city: 'Barcelo', caption:'Barcelona ', Url: "https://cronicaglobal.elespanol.com/uploads/s1/71/08/87/5/hoteles-ingresos-barcelona.jpeg" },
    { city: 'Amterdam', caption:'Amsterdam ', Url: "https://cdn.getyourguide.com/img/tour_img-1686378-146.jpg" },
    { city: 'Nw York', caption:'New York ', Url: "https://cdn.getyourguide.com/img/tour_img-1096032-146.jpg" },
    { city: 'Pars', caption:'Paris ', Url: "https://cdn.getyourguide.com/img/tour_img-1294407-146.jpg" }]
];
// console.log("Usuario id",id_user)

const Carsouls = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <Container key={item.city}>
                        <Row >
                            {item.map((i) => {
                                return (
                                        <Col xs="6" key={i.city}>
                                                <img src={i.Url} alt={item.altText} width="380px" height="280px"/>                    
                                                <CarouselCaption  captionText={i.caption} classname="photo" />
                                        </Col>
                                )
                            })}
                        </Row>
                </Container>

            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Carsouls;