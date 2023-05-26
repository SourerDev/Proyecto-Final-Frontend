

export function arrayPaginator (arr, size, page) {
  const start = page * size;
  console.log(start)
  const end = start + size;
  console.log(end)
  const newArr = arr.slice(start, end);

  console.log(newArr)
  return newArr
}

/* const arr = [{n:1},{n:2},{n:3},{n:4},{n:5},{n:6},{n:7},{n:8}]

const result = arrayPaginator(arr, 12, 0)
console.log(result) */
/* console.log(0 * 3) */