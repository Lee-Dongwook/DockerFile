# Node.js 18 버전을 기반으로 하는 Alpine Linux 이미지 사용
FROM node:18-alpine as builder 

# 작업 디렉토리를 /usr/src/app으로 설정
WORKDIR /usr/src/app

# 현재 디렉토리 내 package.json 및 yarn.lock 파일을 작업 디렉토리에 복사
COPY ./package.json ./

# dependency 설치
RUN yarn install

# 파일 복사
COPY . .

# React app 빌드
RUN yarn build

# Nginx 공식 이미지 사용
FROM nginx

# 3000 포트
EXPOSE 3000

#Nginx 설정 파일을 복사하여 기본 설정에 덮어쓰기
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

#앞에서 빌드한 React app의 정적 파일을 Nginx 기본 디렉토리로 복사
COPY --from=builder /usr/src/app/build  /usr/share/nginx/html

# Nginx를 데몬 모드로 실행
CMD ["nginx", "-g", "daemon off;"]