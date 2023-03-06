<script>
    import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs';

    export default {
        name:'CanvasThreejs',
        components: { Box, Camera, LambertMaterial, PointLight, Renderer, Scene },
        data() {
            return {
                
            }
        },
        methods:{
            
        },
        mounted() {
            const renderer = this.$refs.renderer;
            const cW = renderer.canvas.width;
            const cOffsetW = renderer.canvas.offsetParent.offsetLeft;
            const cH = renderer.canvas.height;
            const cOffsetH = renderer.canvas.offsetParent.offsetHeight;

            //box variables
            const boxSpeeds = {
                movementSpeedX : 0.021,
                movementSpeedY : 0.034,
                rotationSpeedX : 0.03,
                rotationSpeedY : 0.01,
                rotationSpeedZ : -0.03,
            };
            const box2Speeds = {
                movementSpeedX : 0.055,
                movementSpeedY : 0.021,
                rotationSpeedX : -0.01,
                rotationSpeedY : 0.04,
                rotationSpeedZ : 0.024,
            };


            const box = this.$refs.box.mesh;
            const box2 = this.$refs.box2.mesh;

            renderer.onBeforeRender(() => {
                box.rotation.x += boxSpeeds.rotationSpeedX;
                box.rotation.y -= boxSpeeds.rotationSpeedY;
                box.rotation.z += boxSpeeds.rotationSpeedZ;
                box.position.x += boxSpeeds.movementSpeedX;
                box.position.y += boxSpeeds.movementSpeedY;
                
                box2.rotation.x += box2Speeds.rotationSpeedX;
                box2.rotation.y -= box2Speeds.rotationSpeedY;
                box2.rotation.z += box2Speeds.rotationSpeedZ;
                box2.position.x += box2Speeds.movementSpeedX;
                box2.position.y += box2Speeds.movementSpeedY;
                
                // box.position.z += speedX; 
                // console.log(speed,((cW/100) - 10));
                if(box.position.x >= ((cW/100) - 1.3) ||
                    box.position.x <= -((cW/100) - 1.3)){
                    boxSpeeds.movementSpeedX *= -1; 
                }
                if( box.position.y >= ((cH/100) - 1.1) ||
                    box.position.y <= -((cH/100) - 1)){
                    boxSpeeds.movementSpeedY *= -1; 
                }

                if(box2.position.x >= ((cW/100) - 1.3) ||
                    box2.position.x <= -((cW/100) - 1.3)){
                    box2Speeds.movementSpeedX *= -1; 
                }
                if( box2.position.y >= ((cH/100) - 1.1) ||
                    box2.position.y <= -((cH/100) - 1)){
                    box2Speeds.movementSpeedY *= -1; 
                }
                

            });
            console.log();
        },      
    }
</script>

<template>
    <!-- <canvas id="canvas3D" class="w-100 h-100"></canvas> -->
    <Renderer ref="renderer" alpha="true" antialias="true" resize="true" class="w-100 h-100">
        <Camera :position="{ z: 10 }" />
        <Scene>
            <PointLight :position="{ y: 50, z: 50 }" />
            <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
                <LambertMaterial />
            </Box>
            <Box ref="box2" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
                <LambertMaterial />
            </Box>
        </Scene>
    </Renderer>
</template>

<style lang="scss" scoped>
    canvas{
        display: block;
    }
</style>