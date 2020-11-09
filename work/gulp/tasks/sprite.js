const { task } = require('gulp');
var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprites');
var config = require('../config.js');
var options = require('minimist')(process.argv.slice(2));
var spriteConfig = {
  baseSize: 128, // 個別のsvgファイル制作時の高さ
  padding: 10, // スプライト動詞の余白
  common: options.prefix, // mixinに付与するプレフィックス
  // mixinファイルの出力先
  cssFile: config.scss + '/tools/mixins/_' + options.dir + 'Sprite.scss',
  // cssから読み込むspriteファイルの出力先
  svgPath: '../img/' + options.dir + '/sprite.svg',
  // spriteファイルの出力先
  svg: {
    sprite: config.src + '/assets/img/' + options.dir + '/sprite.svg'
  },
  preview: false, // アイコンの一覧画面の生成有
  // mixinファイルを生成するためのテンプレートファイル
  templates: {
    scss: require('fs').readFileSync(config.sprite + '/tmpl/_mixins.scss','utf-8')
  }
};

gulp.task('sprites', function() {
  return gulp.src(config.sprite + '/' + options.dir + '/*.svg')
    .pipe(svgSprite(spriteConfig))
    .pipe(gulp.dest('./'))
})