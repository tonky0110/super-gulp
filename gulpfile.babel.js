import gulp from "gulp";
import gpug from "gulp-pug";
import del from "del";
import ws from "gulp-webserver";

const routes = {
  pug: {
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

const prepare = gulp.series([clean]);

const assets = gulp.series([pug]);

const postDev = gulp.series([webserver]);

export const dev = gulp.series([prepare, assets, postDev]);
