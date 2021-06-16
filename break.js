'use strict';
const musicEle = document.getElementById('music');

// 開始時間
const startTime = new Date();

// インスタンス・アブリアクション！！（嘘。オーディオオブジェクトのインスタンス作成）
const music = new Audio();

// BGMストップカウンター
let stopCounter = 0;

// 僕の厳選したダイナゼノンBGM
const dynazenonBGMs = [
  './media/all this fanfare.mp3',
  './media/all this human.mp3',
  './media/ALL THIS TIME.mp3',
  './media/dyna attack 120bpm.mp3',
  './media/インパーフェクト.mp3'
];

// 開始
showSeconds();

musicEle.onclick = () => {
  stopCounter += 1;
  if (stopCounter === 2) {
    stopCounter = 0;
    music.pause();         // BGM停止処理1
    music.currentTime = 0; // BGM停止処理2
    bgm();
  } else if (stopCounter === 1) {
    bgm();
  }
}

// メインタイマー
function timer() {
  const nowTime = new Date();
  const seconds = Math.floor((nowTime - startTime) / 1000);
  const element = document.getElementById('time');
  element.innerText = `経過時間: ${seconds}秒`;
}

// BGM抽出
function bgm() {
  const bgmIndex = Math.floor(Math.random() * dynazenonBGMs.length); // dynazenonBGMsからランダムで抽出するためのインデックス
  music.src = `${dynazenonBGMs[bgmIndex]}`; // インデックスで抽出されたBGMをセット
  music.play(); // 再生
}

// 一秒ごとに実行
function showSeconds() {
  setInterval(timer, 1000);
}
