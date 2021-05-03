<template>
    <div class="drawArea">
        <canvas
            :width="windowWidth"
            :height="windowHeight"
            ref="drawCanvas"
            class="drawArea__canvas"
            @mousedown="xyDown"
            @mousemove="xyMove"
            @mouseup="xyUpOut"
            @mouseout="xyUpOut"
            @touchstart="xyStartTouch"
            @touchmove="xyMoveTouch"
            @touchend="xyEndTouch"
        ></canvas>
    </div>
</template>

<script>
export default {
    name: "DrawArea",
    data: function () {
        return {
            windowWidth: 0,
            windowHeight: 0,
            canvasContext: false,
            canvasWidth: "",
            canvasHeight: "",
            flag: false,
            dot_flag: false,
            prevX: 0,
            currX: 0,
            prevY: 0,
            currY: 0,
        };
    },
    mounted() {
        //Get canvas reference
        let canvasRef = this.$refs.drawCanvas;
        //Get canvas context
        this.canvasContext = canvasRef.getContext("2d");
        //Get canvas size
        this.canvasWidth = canvasRef.width;
        this.canvasHeight = canvasRef.height;

        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;

        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
        });
    },
    methods: {
        //Handle mousedown
        xyDown: function (event) {
            this.prevX = this.currX; //Get last x
            this.prevY = this.currY; //Get last y
            this.currX = event.clientX - 0; //Get new x
            this.currY = event.clientY - 0; //Get new y

            //Enable flags to draw
            this.flag = true;
            this.dot_flag = true;

            //Handle mouse action
            if (this.dot_flag) {
                this.canvasContext.beginPath();
                this.canvasContext.fillStyle = "red";
                this.canvasContext.fillRect(this.currX, this.currY, 2, 2);
                this.canvasContext.closePath();
                this.dot_flag = false;
            }
        },
        //Hangle mouseup and mouseout
        xyUpOut: function () {
            this.flag = false;
        },
        //Handle mousemove
        xyMove: function (event) {
            //Handle mouse action
            if (this.flag) {
                this.prevX = this.currX; //Get last x
                this.prevY = this.currY; //Get last y
                this.currX = event.clientX - 0; //Get new x
                this.currY = event.clientY - 0; //Get new y
                this.draw(); //Handle draw lines
            }
        },
        xyStartTouch: function (event) {
            this.prevX = this.currX; //Get last x
            this.prevY = this.currY; //Get last y
            this.currX = event.touches["0"].clientX - 0; //Get new x
            this.currY = event.touches["0"].clientY - 0; //Get new y

            //Enable flags to draw
            this.flag = true;
            this.dot_flag = true;

            //Handle touch action
            if (this.dot_flag) {
                this.canvasContext.beginPath();
                this.canvasContext.fillStyle = "red";
                this.canvasContext.fillRect(this.currX, this.currY, 2, 2);
                this.canvasContext.closePath();
                this.dot_flag = false;
            }
        },
        xyEndTouch: function() {
            this.flag = false;
        },
        xyMoveTouch: function (event) {
            //Handle touch action
            if (this.flag) {
                this.prevX = this.currX; //Get last x
                this.prevY = this.currY; //Get last y
                this.currX = event.touches["0"].clientX - 0; //Get new x
                this.currY = event.touches["0"].clientY - 0; //Get new y
                this.draw(); //Handle draw lines
            }
        },
        //Handle the draw, creating the lines on the canvas
        draw: function () {
            this.canvasContext.beginPath();
            this.canvasContext.moveTo(this.prevX, this.prevY); //Where the line goes
            this.canvasContext.lineTo(this.currX, this.currY); //Where the line came from
            this.canvasContext.strokeStyle = "red"; //Line color
            this.canvasContext.lineWidth = 4; //Line Thickness
            this.canvasContext.stroke();
            this.canvasContext.closePath();
        },
    },
};
</script>

<style lang="scss">
.drawArea {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;

    @media #{$mq-md} {
        // height: calc(100vh - #{$navbarTopHeight});
        // top: $navbarTopHeight;
    }

    @include element(canvas) {
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>