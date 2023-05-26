
export function arrayPaginator (arr, size, page) {
  const start = page * size;
  const end = start + size;
  const newArr = arr.slice(start, end);

  return {
    newArr,
    nButtons: (arr.length / size)
  }
}

