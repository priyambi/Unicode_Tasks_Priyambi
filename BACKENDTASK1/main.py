from collections import Counter

n = int(input("Enter a number: "))
print(n)
lst = []
for i in range(0, n):
    x = str(input())
    lst.append(x)
x = Counter(lst)
print(len(x))
print(Counter(lst))
