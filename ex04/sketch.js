let x, y;
let speedX, speedY;
let maxSpeed = 2; // 최대 속도 설정
let img; // 이미지 객체
let s = 50; // 이미지 크기

function preload() {
    // 자신의 GIF 파일 로드
    img = loadImage('memory2_f.gif'); // 'myAnimation.gif'를 자신의 파일 이름으로 변경
}

function setup() {
    createCanvas(400, 400);
    x = random(width - s);
    y = random(height - s);
    speedX = random(-maxSpeed, maxSpeed);
    speedY = random(-maxSpeed, maxSpeed);
}

function draw() {
    background(255);

    // 이미지 그리기
    image(img, x, y, s, s);

    // 위치 업데이트
    x += speedX;
    y += speedY;

    // 화면의 경계를 확인하고 반사 효과 적용
    if (x <= 0 || x >= width - s) {
        speedX *= -1;
    }
    if (y <= 0 || y >= height - s) {
        speedY *= -1;
    }

    // 스무스하게 방향을 조금씩 변경
    speedX += random(-0.1, 0.1);
    speedY += random(-0.1, 0.1);

    // 속도 제한
    speedX = constrain(speedX, -maxSpeed, maxSpeed);
    speedY = constrain(speedY, -maxSpeed, maxSpeed);
}