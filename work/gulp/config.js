const { KssStyleguide } = require("kss");

// モジュールの定義
module.exports = {
  // 出力先の指定
  build: './build', // 出力先ディレクトリ
  src: './src', // ソースディレクトリ
  scss: './assets/scss', //Sassファイルを格納するディレクトリ
  sprite: './assets/sprite', // スプライト化する画像を管理するディレクトリ
  styleguite: './assets/styleguide' // KSSのテンプレートの格納ディレクトリ
};
