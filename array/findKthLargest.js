/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => a - b);

  const heap = new Heap(nums);

  let lastNonLeafEleIndex = Math.floor((nums.length - 1) / 2);

  for (let i = lastNonLeafEleIndex; i >= 0; i--) {
    heap.bubbleDown(i);
  }

  console.log(heap.list);

  let answer = 0;

  while (k > 0) {
    answer = heap.pop();
    k--;
  }

  return answer;
};

function Heap(arr) {
  this.list = arr;
  this.size = 0;
}

Heap.prototype.push = function (value) {
  this.list.push(value);
  this.size = this.size + 1;
  this.bubbleUp(this.size - 1);
};

Heap.prototype.pop = function () {
  const val = this.list[0];
  this.list[0] = this.list.pop();

  let index = 0;

  this.bubbleDown(index);
  return val;
};

Heap.prototype.bubbleDown = function (index) {
  let left = 2 * index + 1;
  let right = 2 * index + 2;
  let swap = index;

  if (left < this.list.length && this.list[left] > this.list[index]) {
    swap = left;
  }

  if (right < this.list.length && this.list[right] > this.list[swap]) {
    swap = right;
  }

  if (swap != index) {
    let temp = this.list[swap];
    this.list[swap] = this.list[index];
    this.list[index] = temp;
    this.bubbleDown(swap);
  }
};

Heap.prototype.bubbleUp = function (index) {
  let parentIndex = Math.floor(index / 2);
  let childEle = this.list[index];
  let parentEle = this.list[parentIndex];

  while (index > 0 && parentEle <= childEle) {
    let temp = this.list[parentIndex];
    this.list[parentIndex] = childEle;
    this.list[index] = temp;

    index = parentIndex;

    parentIndex = Math.floor(index / 2);

    childEle = this.list[index];
    parentEle = this.list[parentIndex];
  }
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
