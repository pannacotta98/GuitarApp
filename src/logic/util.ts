/**
 * Heavily based on https://web.archive.org/web/20140418004051/http://dzone.com/snippets/calculate-all-combinations
 */
export function combine<T>(a: T[]) {
  var fn = function (n: number, src: T[], got: T[], all: T[][]) {
    if (n === 0) {
      if (got.length > 0) {
        all[all.length] = got;
      }
      return;
    }
    for (var j = 0; j < src.length; j++) {
      fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
    }
    return;
  };
  var all: T[][] = [];
  for (var i = 0; i < a.length; i++) {
    fn(i, a, [], all);
  }
  all.push(a);
  return all;
}

export function occurences<T>(input: T[]) {
  const counts = new Map<T, number>();
  for (const element of input) {
    const elementOccurences = counts.get(element);
    if (elementOccurences !== undefined) counts.set(element, elementOccurences + 1);
    else counts.set(element, 1);
  }
  return counts;
}
