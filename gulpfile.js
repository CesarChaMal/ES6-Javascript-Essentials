const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("babelize", () => {
  return gulp.src("./src/**/**/start/*.js")
  .pipe(babel({presets:['es2015']}))
  .pipe(gulp.dest("./dist"));
});

gulp.task("babel", () => {
  return gulp.watch("./src/**/**/start/*.js", ['babelize']);
});

gulp.task("default",["babelize","babel"]);
