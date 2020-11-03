# Gulp,Sassを用いたメンテナブルなCSS設計入門

こちらの書籍を用いて勉強した。
[はじめてのCSS設計](https://www.amazon.co.jp/%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AECSS%E8%A8%AD%E8%A8%88-%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%81%8C%E6%95%99%E3%81%88%E3%82%8B%E3%83%A1%E3%83%B3%E3%83%86%E3%83%8A%E3%83%96%E3%83%AB%E3%81%AACSS%E8%A8%AD%E8%A8%88%E6%89%8B%E6%B3%95-%E7%94%B0%E8%BE%BA%E4%B8%88%E5%A3%AB-ebook/dp/B06XW99W39)

# npm install
## npm install -g [plug-in]
グローバルインストールが行われる。
-gオプションなしで実行すると、カレントディレクトリの
node_modulesの中にインストールされる

## npm install --save
package.jsonのdependenciesにバージョン付きで書き込まれる

## npm install --save-dev
package.jsonのdevDependenciesにバージョン付きで書き込まれる。
このオプションは開発時のみに利用するライブラリのバージョン管理を行う

※ アンインストールは上記の構文のinsutallをuninstallに変える

<strong>npm installを行うと node_modulesフォルダが作成される</strong>

# npm init -y
package.jsonの雛形？を作成してくれる
ひとまずpackage.jsonを作る際に打ち込む

# gulpfile.jsの書き方
***javascript
var gu;p = require('gulp');

gulp.task('<タスク名>', function() {
  // ここにタスクの内容を記載する
});
***


