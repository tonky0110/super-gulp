# Super Gulp

Learn Gulp by building an awesome development environment


npm install gulp-cli -g
npm install gulp -D
npx -p touch nodetouch gulpfile.js
gulp --help

npm i -D @babel/core @babel/preset-env @babel/register

npm i gulp-pug

npm i gulp-webserver

choco upgrade python2
choco upgrade visualstudio2017-workload-vctools
npm update --force
cmd 관리자권한으로 실행 > npm install --global --production windows-build-tools@4.0.0

npm i -D gulp-image
External Dendencies
brew install libjpeg libpng on macOS
apt-get install -y libjpeg libpng on Ubuntu
npm install -g windows-build-tools on Windows


gulp-image 가 안되는 문제로 image파일의 압축이 불가(윈도우에서)
단순히 src/img --> dest/img로 복사하도록 copy task를 만들어 처리.