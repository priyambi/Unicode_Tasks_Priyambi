from collections import Counter         #sub-class inside dictionary class

n = int(input("Enter a number: "))
print(n)
lst = []
for i in range(0, n):
    x = str(input())
    lst.append(x)                      #adding each string(total n strings) to the list
x = Counter(lst)
print(len(x))                          # prints unique number of words
print(Counter(lst))                    # prints the frequency of each word
