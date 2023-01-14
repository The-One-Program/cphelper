#!/bin/bash

touch generator.cpp | echo $1 > generator.cpp
touch main.cpp | echo $2 > main.cpp
touch brute.cpp | echo $3 > brute.cpp

g++ $generator.cpp -o $generator
g++ $main.cpp -o $main 
g++ $brute.cpp -o $brute

flag=true

for i in {1..10}
do
    echo "$i"
 
	./generator > input.txt
	./main < input.txt > output.txt
	./brute < input.txt > output2.txt
 
	diff output.txt output2.txt > diff.txt
 
	myVar=($(wc -w ./diff.txt))
	if [ $myVar -gt 0 ] ; then
		echo "Wrong on test: $i"
		flag=false
        break
	fi
done

if [ "$flag" = true ] ; then
	echo "All cases passed"
fi