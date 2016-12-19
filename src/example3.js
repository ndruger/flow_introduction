// @flow
// 型指定をしない変数を伝搬してチェックされる例

function f1(): string|null {
  return Math.random() < 0.5 ? 'test': null;
}

function f2(s: string) {
  console.log(s);
}

const v = f1(); // vには明示的に型をしていしないが、f1の返り値なのでstring|nullとみなされる
f2(v);  // vがstring|nullで、f2の引数がstringなのでエラー


// // キャストもある(f1が引数に依存してその状況ではnullを返さない場合などに利用)
// const v = ((f1(): any): string); // キャスト。 https://flowtype.org/blog/2015/02/18/Typecasts.html
// f2(v);


// // 条件文を考慮してくれる
// const v = f1(); // ここではvはstring|nullだが、
// if (v !== null) { // この中にくるのはstringの場合なので、
//   f2(v);  // これはエラーにならない。
// }
