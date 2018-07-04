function intersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const intersect  = [...set1].filter(num => {
    return set2.has(num);
  });
  // let intersect = new Set([...set1].filter(x => set2.has(x)));
  return intersect;
}

const arr1 = [1,3,3,3,4,5];
const arr2 = [1,4,6];
console.log(intersection(arr1, arr2));

