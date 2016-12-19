// @flow
// 返り値の例

function f1(): string {
  return Math.random() < 0.5 ? 'test': null;  // nullの場合があるでのエラー
}

f1();


