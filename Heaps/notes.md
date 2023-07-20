# Heap - data structure to manage information
    - binary heap
    - nearly complete binary tree


## Common uses:
    - heapsort
    - priority queues

## types:
    - max-heap
    - min-heap

### max-heap:
    value of i <= value of parent
    their used for heapsort

### min-heap:
    value of i >= value of parent
    their used for priority queues

. Heigh of heap is -> O(logn)


    left(i) = 2*i;
    right(i) = 2*i + 1;
    parent(i) = floor(i/2);