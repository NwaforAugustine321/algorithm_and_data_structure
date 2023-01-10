// Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function (t) {
  if (t == null || t.next == null) {
    return t;
  }

  let f = reverseList(t.next);

  t.next.next = t;
  t.next = null;

  return f;
};
