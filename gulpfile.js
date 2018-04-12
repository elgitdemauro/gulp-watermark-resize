var gulp 				= require("gulp");
var watermark 	= require("gulp-watermark");
var imageResize = require('gulp-image-resize');
 
gulp.task('new', function () {	
	gulp.src("./img/*.jpg")
		.pipe(imageResize({
			width : 1024,
			height : 684,
			crop : true,
			upscale : true
		}))
	  .pipe(watermark({
			image: "watermark.png"
		}))	  
	  .pipe(gulp.dest("./img/new"))
});

gulp.task('default', ['new']);
