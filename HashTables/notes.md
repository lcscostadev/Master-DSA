# Hash Tables reprensent's a dynamic set of data.

    Insert / Delete / Search

    * Hash tables shine in search with an O(1) average and wors in the On *

    Need to find an key word to know every operation on different data structures

Key Value pair


##  Key  - -  Value
  gender     male

.We use an hash function to generate an index or 'hash code'.

.The hash code is used to determine the position where the value will be stored.

.If multiple keys produce the same hash code (hash collision), techniques like chaining or open adressing may be used to handle collisions and store multiple values in the same bucket.

.When searching for a value based on a key, the key is hashed again, and the resulting index is used to directly access the value stored at that position.



## Common examples and uses of hash tables:

    Object Property Lookup: JavaScript objects can be thought of as hash tables, where the object properties act as keys, and their corresponding values can be easily accessed or updated.

    Caching: Hash tables are often used to implement caching mechanisms. By storing computed values as key-value pairs, expensive computations can be avoided when the same input is encountered again, improving performance.

    Counting and Frequency Analysis: Hash tables can efficiently count the occurrences of elements in a collection or analyze the frequency of words in a text document.

    Data Deduplication: Hash tables can be used to identify and remove duplicate entries from a dataset, ensuring uniqueness and optimizing storage.

    Implementing Algorithms: Hash tables are used as fundamental building blocks in various algorithms like hash-based data structures (e.g., hash sets, hash maps), string matching algorithms (e.g., Rabin-Karp algorithm), and more.

    Efficient Lookups: Hash tables provide fast access to values based on keys, making them useful for implementing associative arrays, symbol tables, and lookup tables.

# Dictionary
    - generic way to map keys to values
    - Hash table is an implementation of a dictionary using an hash function 

# Dictionary usage in python

    # insert 
    dictionary['e'] = False

    # delete
    del dictionary['a']

    # search
    print(dictionary['c'])

# Time complexity

    SPACE - O(K)


# Chaining with Linked Lists


# Goals of an Hash function

    - maximize randomness.
    - produce the least amount of collisions. 

    # examples of hash functions:
        - division
        - multiplication
        - universal hashing
        - dynamic perfect hashing
        - static perfect hashing