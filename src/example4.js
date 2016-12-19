// @flow
// 複雑な型指定

// 型定義ができる。文字列の直和型はjavascriptでたまに使うので嬉しい
type T = 'apple' | 'orange';

// 定義されたtypeをメンバーとして持つtypeを作れる
type P = {
  field1: T,
  field2?: number,  // optionalなパタメーター
};

// ES2016のdestructuringで展開しながら、型をチェック
function f1({field1, field2}: P) {
  console.log(field1, field2);
}

// function f1(p: P) {
//   console.log(p.field3);  // Pにfield3はないのでエラー
// }

f1({
  field1: 'apple',
});
