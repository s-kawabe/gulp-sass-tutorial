var gulp = require('gulp');
var kss = require('kss');
var config = require('../config.js');

// kssのビルド設定
var kssConfig = {
  source: config.scss, // 生成元のディレクトリ
  homepage: '../styleguide/README.md', // ドキュメントファイル
  title: 'STYLE GUIDE', // スタイルガイドのタイトル
  destination: config.build + '/styleguide/', // 出力先のディレクトリ 
  css: '../assets/css/style.css',  // スタイルガイドで読み込むCSSのパス
  builder: config.styleguite // テンプレートのディレクトリ
};

gulp.task('kss', function() {
  return kss(kssConfig);
});