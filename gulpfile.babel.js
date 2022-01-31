import gulp from "gulp";
import gpug from "gulp-pug";
import del from "del";
import ws from "gulp-webserver";

const routes = {    
  pug: {
    watch: "src/**/*.pug",
    src: "src/*.pug",
    dest: "build",
  },
};

const pug = () =>
  gulp.src(routes.pug.src).pipe(gpug()).pipe(gulp.dest(routes.pug.dest));

const clean = () => del(["build"]);

// gulp-webserver 프록시 설정 - https://stackoverflow.com/questions/31047493/using-gulp-webserver-with-proxy-and-middleware/32259691
const webserver = () =>
  gulp.src("build").pipe(
    ws({
      port: 3000,
      livereload: true,
      open: "http://localhost:3000",
      // proxies: [
      //     {
      //         source:'/api', target: 'http://********',
      //     }
      // ]
    })
  );

const watch = () => {
    gulp.watch(routes.pug.watch, pug); // (감시 대상, 변경 시 작업)
}

const prepare = gulp.series([clean]);

const assets = gulp.series([pug]);

const postDev = gulp.parallel([webserver, watch]);

export const dev = gulp.series([prepare, assets, postDev]);

// gulp.series - 여러개의 작업을 순차적으로 처리
// gulp.parallel() - 두개 이상의 작업을 동시에 처리