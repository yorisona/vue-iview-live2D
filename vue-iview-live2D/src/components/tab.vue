<template>
    <Tabs :animated="false">
        <TabPane label="标签一">
            标签一的内容
            <Carousel autoplay v-model="value1" loop>
                <CarouselItem>
                    <div class="demo-carousel">
                        2
                        <img src="../assets/01.jpg" alt />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        3
                        <img src="../assets/01.jpg" alt />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        4
                        <img src="../assets/01.jpg" alt />
                    </div>
                </CarouselItem>
            </Carousel>
        </TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
export default {
    data() {
        return {
            value1: 0
        };
    }
};
</script>
