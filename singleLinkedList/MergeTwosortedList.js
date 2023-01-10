// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

var mergeTwoLists = function (list1, list2) {
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  let head;
  let l1, l2;

  if (list1.val <= list2.val) {
    head = list1;
    l1 = list1.next;
    l2 = list2;
  } else {
    head = list2;
    l2 = list2.next;
    l1 = list1;
  }

  head.next = mergeTwoLists(l1, l2);

  console.log(head);
  return head;
};
