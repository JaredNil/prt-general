
import './Background.scss'

const Background = () => {
    return (
        <div className="background__wrapper">
            <canvas />
        </div>
    )
}

class GradientAnimation {
    constructor() {
        this.cnv = document.querySelector(`canvas`);
        this.ctx = this.cnv.getContext(`2d`);

        this.circlesNum = 15;
        this.minRadius = 800;
        this.maxRadius = 800;
        this.speed = .008;

        (window.onresize = () => {
            this.setCanvasSize();
            this.createCircles();
            this.createUserCircle();
        })();
        (window.onmousemove = (e) => {
            this.createUserCircle(e);
        })();
        this.drawAnimation();

    }
    setCanvasSize() {
        this.w = this.cnv.width = window.innerWidth * devicePixelRatio;
        this.h = this.cnv.height = window.innerHeight * devicePixelRatio;
        this.ctx.scale(devicePixelRatio, devicePixelRatio)
    }
    createCircles() {
        this.circles = [];
        for (let i = 0; i < this.circlesNum; ++i) {
            this.circles.push(new Circle(this.w, this.h, this.minRadius, this.maxRadius));
        }
    }
    createUserCircle(e) {
          
            if (e!==undefined) {
                this.userCircle = new CircleUser(e.clientX, e.clientY, 300)
            }
            else this.userCircle = new CircleUser(400, 800, 200)
            
    }
    drawCircles() {
        this.circles.forEach(circle => circle.draw(this.ctx, this.speed));
        this.userCircle.draw(this.ctx, this.speed)
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.w, this.h);
    }
    drawAnimation() {
        this.clearCanvas();
        this.drawCircles();
        window.requestAnimationFrame(() => this.drawAnimation());
    }
}

const colorStorage = [
    '255,102,102',
    '102,102,204',
    '102,204,204',
    '153,204,153',
    '204,204,51'
]

class Circle {
    constructor(w, h, minR, maxR) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.angle = Math.random() * Math.PI * 2;
        this.radius = Math.random() * (maxR - minR) + minR;
        this.firstColor = getCircleUnicleColorFirst()
        this.secondColor = getCircleUnicleColorSecond()
    }
    draw(ctx, speed) {
        this.angle += speed;
        const x = this.x + Math.cos(this.angle) * 200;
        const y = this.y + Math.sin(this.angle) * 200;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
        gradient.addColorStop(0, this.firstColor);
        gradient.addColorStop(1, this.secondColor);

        ctx.globalCompositeOperation = `overlay`;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}


const getCircleUnicleColorFirst = ()=> {
    return `rgba(${colorStorage[Math.floor(colorStorage.length * Math.random())]}, 1)`
}
const getCircleUnicleColorSecond = ()=> {
    return `rgba(${colorStorage[Math.floor(colorStorage.length * Math.random())]}, 0)`
}
class CircleUser {
    constructor(w, h, radius) {
        this.x = w;
        this.y = h;
        this.angle = Math.random() * Math.PI * 2;
        this.radius = radius;
        this.firstColor = `hsla(352, 100%, 50%, 1)`;
        this.secondColor = `hsla(352, 100%, 50%, 0.01)`;
    }
    draw(ctx, speed) {
        this.angle += speed;
        const x = this.x;
        const y = this.y;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
        gradient.addColorStop(0, this.firstColor);
        gradient.addColorStop(1, this.secondColor);

        ctx.globalCompositeOperation = `overlay`;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.shadowColor = '#8D160E96';
        ctx.shadowBlur = 10;
        ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowColor = null
        ctx.shadowBlur = null
    }
}

window.onload = () => {
    new GradientAnimation();
}

export default Background


