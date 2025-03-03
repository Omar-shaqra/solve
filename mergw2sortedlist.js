class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeTwoLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
  
    if (list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
    } else {
      list2.next = mergeTwoLists(list1, list2.next);
      return list2;
    }
  }
  


  const list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(4);

  const list2 = new ListNode(1);

console.log(mergeTwoLists(list1, list2));